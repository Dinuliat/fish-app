import { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom"
import { FishImage } from "../components/fish-image"
import { fishes } from "../fishes";

export const Magicworld = () => {
    const navigation = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFishes = useMemo(() => {
        if (!searchQuery) return [];
        return fishes.filter(fish =>
            fish.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const onResultClick = (id: string) => {
        navigation(`/fish/${id}`);
    };

    const onSafeFishes = useCallback(() => {
        navigation("/safe-fishes")
    }, [navigation])

    const onDangerousFishes = useCallback(() => {
        navigation("/dangerous-fishes")
    }, [navigation])

    const onNoFishes = useCallback(() => {
        navigation("/no-fishes")
    }, [navigation])

    return (
        <div className="p-1">
            <div className="MagicContainer" style={{ minHeight: "100vh" }}>
                <div className="Search" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ position: "relative" }}>
                        <input
                            placeholder="поиск"
                            type='text'
                            value={searchQuery}
                            onChange={onSearchChange}
                        />
                        {filteredFishes.length > 0 && (
                            <div className="SearchResults" style={{
                                position: "absolute",
                                top: "100%",
                                left: 0,
                                right: 0,
                                backgroundColor: "rgba(9, 39, 170, 0.9)",
                                border: "1px solid aqua",
                                zIndex: 1000,
                                maxHeight: "200px",
                                overflowY: "auto",
                                color: "aqua"
                            }}>
                                {filteredFishes.map(fish => (
                                    <div
                                        key={fish.id}
                                        onClick={() => onResultClick(fish.id)}
                                        style={{
                                            padding: "8px",
                                            cursor: "pointer",
                                            borderBottom: "1px solid rgba(0, 255, 255, 0.3)",
                                            fontFamily: "'Monotype Corsiva', 'Times New Roman', Times, serif"
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(0, 255, 255, 0.2)"}
                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                                    >
                                        {fish.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="Banner">
                    <p className="Banner_text">Волшебный подводный мир Красного моря</p>
                </div>
                <div className='Box'>
                    <FishImage
                        src="image/safe-fishes/kabubas/кабубы2.jpg"
                        onClick={onSafeFishes}
                        text="Безопасные рыбы"
                    />
                    <FishImage
                        src="image/dangerous-fishes/tigger-fish/тигровая акула (6).jpg"
                        onClick={onDangerousFishes}
                        text="Опасные рыбы"
                    />
                    <FishImage
                        src="image/no-fishes/squids/кальмары6.jpg"
                        onClick={onNoFishes}
                        text="Не рыбы"
                    />
                </div>
            </div>
        </div>
    )
}