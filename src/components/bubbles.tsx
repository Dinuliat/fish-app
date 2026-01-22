import { useEffect, useState } from "react";

type Bubble = {
    id: number;
    size: number;
    left: number;
    duration: number;
    delay: number;
};

export const Bubbles = () => {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        // Генерация пузырьков
        const generatedBubbles: Bubble[] = [];
        for (let i = 0; i < 20; i++) {
            generatedBubbles.push({
                id: i,
                size: Math.random() * 40 + 10, // размер от 10 до 50px
                left: Math.random() * 100, // позиция по горизонтали от 0 до 100%
                duration: Math.random() * 5 + 5, // длительность от 5 до 10 секунд
                delay: Math.random() * 5, // задержка от 0 до 5 секунд
            });
        }
        setBubbles(generatedBubbles);
    }, []);

    return (
        <div className="bubbles-container">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble"
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: `${bubble.left}%`,
                        animationDuration: `${bubble.duration}s`,
                        animationDelay: `${bubble.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};
