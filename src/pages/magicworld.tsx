import { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom"
import { FishImage } from "../components/fish-image"
import { allFishes } from "../data/fishes"

export const Magicworld = () => {
    const navigation = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const onSafeFishes = useCallback(() => {
        navigation("/safe-fishes")
    }, [navigation])

    const onDangerousFishes = useCallback(() => {
        navigation("/dangerous-fishes")
    }, [navigation])

    const onNoFishes = useCallback(() => {
        navigation("/no-fishes")
    }, [navigation])

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }, []);

    const filteredFishes = useMemo(() => {
        if (!searchQuery.trim()) {
            return [];
        }
        return allFishes.filter(fish =>
            fish.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const showSearchResults = searchQuery.trim().length > 0;

    return (
        <div className="MagicContainer main-page">
            <div className="Search">
                <input 
                    placeholder="поиск" 
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="Banner">
                <p className="Banner_text">Волшебный подводный мир Красного моря</p>
            </div>

            {showSearchResults ? (
                <div className='search-results'>
                    {filteredFishes.length > 0 ? (
                        <>
                            <div className="search-results-header">
                                Найдено рыб: {filteredFishes.length}
                            </div>
                            <div className='Box'>
                                {filteredFishes.map(fish => (
                                    <FishImage
                                        key={fish.id}
                                        src={fish.image}
                                        onClick={() => navigation(fish.path)}
                                        text={fish.name}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="search-no-results">
                            <p>Ничего не найдено по запросу "{searchQuery}"</p>
                            <p className="search-hint">Попробуйте изменить запрос</p>
                        </div>
                    )}
                </div>
            ) : (
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
            )}
        </div>
    )
}