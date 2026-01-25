import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom marker icons for different reef types
const createCustomIcon = (color: string) => {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
        iconSize: [25, 25],
        iconAnchor: [12, 12],
    });
};

const barrierReefIcon = createCustomIcon('#FF6B6B'); // Красный для барьерных рифов
const atollIcon = createCustomIcon('#4ECDC4'); // Бирюзовый для атоллов
const fringingReefIcon = createCustomIcon('#45B7D1'); // Синий для окаймляющих рифов
const patchReefIcon = createCustomIcon('#96CEB4'); // Зеленый для пятнистых рифов

interface CoralReef {
    name: string;
    position: [number, number];
    country: string;
    type: 'barrier' | 'atoll' | 'fringing' | 'patch';
    area?: string;
    depth?: string;
    biodiversity?: string;
    description: string;
    highlights?: string[];
}

// Detailed coral reef locations around the world
const coralReefs: CoralReef[] = [
    // Барьерные рифы (Barrier Reefs)
    { 
        name: 'Большой Барьерный риф', 
        position: [-18.2871, 147.6992], 
        country: 'Австралия',
        type: 'barrier',
        area: '~344,400 км²',
        depth: 'до 2000 м',
        biodiversity: '1500+ видов рыб, 400+ видов кораллов',
        description: 'Крупнейшая система коралловых рифов в мире, видимая из космоса',
        highlights: ['Объект ЮНЕСКО', 'Самое большое живое сооружение', 'Место обитания дюгоней']
    },
    { 
        name: 'Барьерный риф Новой Каледонии', 
        position: [-20.9043, 165.6180], 
        country: 'Новая Каледония',
        type: 'barrier',
        area: '~23,400 км²',
        depth: 'до 1000 м',
        biodiversity: '1000+ видов рыб, 350+ видов кораллов',
        description: 'Второй по величине барьерный риф в мире',
        highlights: ['Объект ЮНЕСКО', 'Уникальные виды', 'Двойной барьерный риф']
    },
    { 
        name: 'Белизский барьерный риф', 
        position: [17.3166, -88.2353], 
        country: 'Белиз',
        type: 'barrier',
        area: '~900 км²',
        depth: 'до 3000 м',
        biodiversity: '500+ видов рыб, 100+ видов кораллов',
        description: 'Крупнейший риф в западном полушарии',
        highlights: ['Объект ЮНЕСКО', 'Большая голубая дыра', 'Острова кайя']
    },
    { 
        name: 'Барьерный риф Андроса', 
        position: [24.4261, -77.9745], 
        country: 'Багамы',
        type: 'barrier',
        area: '~225 км длины',
        depth: 'до 1800 м',
        biodiversity: '450+ видов рыб',
        description: 'Третий по величине барьерный риф в мире',
        highlights: ['Голубые дыры', 'Стена Андроса', 'Богатая фауна акул']
    },

    // Атоллы (Atolls)
    { 
        name: 'Мальдивские атоллы', 
        position: [3.2028, 73.2207], 
        country: 'Мальдивы',
        type: 'atoll',
        area: '~21,000 км²',
        depth: 'до 500 м',
        biodiversity: '1100+ видов рыб, 250+ видов кораллов',
        description: 'Архипелаг из 26 атоллов с кристально чистой водой',
        highlights: ['Мантовые скаты', 'Китовые акулы', 'Роскошные курорты']
    },
    { 
        name: 'Палау', 
        position: [7.5150, 134.5825], 
        country: 'Палау',
        type: 'atoll',
        area: '~466 км²',
        depth: 'до 1000 м',
        biodiversity: '1500+ видов рыб, 700+ видов кораллов',
        description: 'Райский уголок с уникальным Озером Медуз',
        highlights: ['Озеро Медуз', 'Рок Айлендс', 'Объект ЮНЕСКО']
    },
    { 
        name: 'Альдабра', 
        position: [-9.4167, 46.3667], 
        country: 'Сейшелы',
        type: 'atoll',
        area: '~155 км²',
        depth: 'до 800 м',
        biodiversity: 'Крупнейшая популяция гигантских черепах',
        description: 'Один из крупнейших атоллов в мире',
        highlights: ['Объект ЮНЕСКО', '100,000+ черепах', 'Нетронутая природа']
    },
    { 
        name: 'Атолл Лайсанский', 
        position: [25.7669, -171.7324], 
        country: 'США (Гавайи)',
        type: 'atoll',
        area: '~1,600 км²',
        depth: 'до 500 m',
        biodiversity: 'Тюлени-монахи, зеленые черепахи',
        description: 'Часть морского заповедника Папаханаумокуакеа',
        highlights: ['Объект ЮНЕСКО', 'Заповедная зона', 'Редкие виды']
    },

    // Окаймляющие рифы (Fringing Reefs)
    { 
        name: 'Красное море (Шарм-эль-Шейх)', 
        position: [27.9158, 34.3300], 
        country: 'Египет',
        type: 'fringing',
        area: '~438,000 км²',
        depth: 'до 3040 м',
        biodiversity: '1200+ видов рыб, 200+ видов кораллов',
        description: 'Одно из лучших мест для дайвинга в мире',
        highlights: ['Яркие кораллы', 'Затонувшие корабли', 'Круглогодичный дайвинг']
    },
    { 
        name: 'Красное море (Дахаб)', 
        position: [28.5096, 34.5165], 
        country: 'Египет',
        type: 'fringing',
        area: 'Протяженные рифы',
        depth: 'до 130 м (Голубая дыра)',
        biodiversity: 'Рифовые акулы, барракуды, наполеоны',
        description: 'Знаменитая Голубая дыра и каньон',
        highlights: ['Голубая дыра', 'Каньон', 'Фридайвинг']
    },
    { 
        name: 'Эйлат (Красное море)', 
        position: [29.5581, 34.9482], 
        country: 'Израиль',
        type: 'fringing',
        area: '~1,200 м береговой линии',
        depth: 'до 900 м',
        biodiversity: '270+ видов кораллов, дельфины',
        description: 'Северная точка Красного моря с уникальными рифами',
        highlights: ['Дельфиний риф', 'Коралловый заповедник', 'Ночной дайвинг']
    },
    { 
        name: 'Акаба (Красное море)', 
        position: [29.5321, 35.0063], 
        country: 'Иордания',
        type: 'fringing',
        area: '~27 км береговой линии',
        depth: 'до 1850 м',
        biodiversity: '450+ видов рыб, 127 видов кораллов',
        description: 'Единственный выход Иордании к морю',
        highlights: ['Затонувшие танки', 'Кедровая Прайд', 'Морской парк']
    },
    { 
        name: 'Раджа-Ампат', 
        position: [-0.2353, 130.5214], 
        country: 'Индонезия',
        type: 'fringing',
        area: '~40,000 км²',
        depth: 'до 2000 м',
        biodiversity: '1600+ видов рыб, 75% всех кораллов мира',
        description: 'Самое биоразнообразное место для дайвинга',
        highlights: ['Максимальное биоразнообразие', 'Манты', 'Воббегонги']
    },
    { 
        name: 'Симиланские острова', 
        position: [8.6667, 97.6428], 
        country: 'Таиланд',
        type: 'fringing',
        area: '~140 км²',
        depth: 'до 40 м',
        biodiversity: 'Мантовые скаты, китовые акулы',
        description: 'Национальный парк с белоснежными пляжами',
        highlights: ['Риффельбол', 'Мантовые скаты', 'Китовые акулы']
    },
    { 
        name: 'Пхи-Пхи', 
        position: [7.7407, 98.7784], 
        country: 'Таиланд',
        type: 'fringing',
        area: '~48 км²',
        depth: 'до 30 м',
        biodiversity: 'Леопардовые акулы, черепахи',
        description: 'Известные острова из фильма "Пляж"',
        highlights: ['Бухта Майя', 'Леопардовые акулы', 'Пещеры']
    },
    { 
        name: 'Занзибар', 
        position: [-6.1659, 39.2026], 
        country: 'Танзания',
        type: 'fringing',
        area: '~1,660 км²',
        depth: 'до 50 м',
        biodiversity: 'Дельфины, черепахи, китовые акулы',
        description: 'Остров специй с богатыми рифами',
        highlights: ['Атолл Мнемба', 'Дельфины', 'Пряности']
    },
    { 
        name: 'Окинава', 
        position: [26.2124, 127.6809], 
        country: 'Япония',
        type: 'fringing',
        area: '~1,200 км²',
        depth: 'до 200 м',
        biodiversity: '400+ видов кораллов, манты',
        description: 'Субтропические рифы с уникальными видами',
        highlights: ['Голубая пещера', 'Манты', 'Исторические места']
    },
    { 
        name: 'Боракай', 
        position: [11.9674, 121.9248], 
        country: 'Филиппины',
        type: 'fringing',
        area: '~10 км²',
        depth: 'до 40 м',
        biodiversity: 'Нудибранхии, морские коньки',
        description: 'Белый пляж и красочные рифы',
        highlights: ['Белый пляж', 'Макро дайвинг', 'Кайтсерфинг']
    },
    { 
        name: 'Бохол (Панглао)', 
        position: [9.5834, 123.7584], 
        country: 'Филиппины',
        type: 'fringing',
        area: '~80 км²',
        depth: 'до 60 м',
        biodiversity: 'Долгопяты, китовые акулы, черепахи',
        description: 'Шоколадные холмы и богатый подводный мир',
        highlights: ['Балакасаг', 'Черепахи', 'Долгопяты']
    },
    { 
        name: 'Себу (Моалбоал)', 
        position: [9.9488, 123.3948], 
        country: 'Филиппины',
        type: 'fringing',
        area: '~25 км береговой линии',
        depth: 'до 70 м',
        biodiversity: 'Сардиновый бег, черепахи, акулы-молоты',
        description: 'Знаменитый сардиновый бег',
        highlights: ['Сардиновый бег', 'Остров Пескадор', 'Рифовые акулы']
    },
    { 
        name: 'Ко Тао', 
        position: [10.0956, 99.8397], 
        country: 'Таиланд',
        type: 'fringing',
        area: '~21 км²',
        depth: 'до 35 м',
        biodiversity: 'Китовые акулы, черепахи',
        description: 'Мекка для начинающих дайверов',
        highlights: ['Сейл Рок', 'Черепахи', 'Обучение дайвингу']
    },

    // Пятнистые рифы (Patch Reefs)
    { 
        name: 'Флорида-Кис', 
        position: [24.6556, -81.5571], 
        country: 'США',
        type: 'patch',
        area: '~4000 км²',
        depth: 'до 40 м',
        biodiversity: '500+ видов рыб, акулы-няньки',
        description: 'Единственный живой коралловый риф в континентальной части США',
        highlights: ['Музей подводных скульптур', 'Акулы-няньки', 'Затонувшие корабли']
    },
    { 
        name: 'Галапагосские острова', 
        position: [-0.9538, -90.9656], 
        country: 'Эквадор',
        type: 'patch',
        area: '~7,880 км²',
        depth: 'до 3000 м',
        biodiversity: 'Морские игуаны, молотоголовые акулы',
        description: 'Уникальная экосистема с эндемичными видами',
        highlights: ['Объект ЮНЕСКО', 'Молотоголовые акулы', 'Морские игуаны']
    },
    { 
        name: 'Кокосовый остров', 
        position: [5.5372, -87.0739], 
        country: 'Коста-Рика',
        type: 'patch',
        area: '~24 км²',
        depth: 'до 3000 м',
        biodiversity: 'Акулы-молоты, манты, тунцы',
        description: 'Необитаемый остров с огромными стаями рыб',
        highlights: ['Объект ЮНЕСКО', 'Акулы-молоты', 'Сокровища пиратов']
    },
    { 
        name: 'Сейшельские острова', 
        position: [-4.6796, 55.4920], 
        country: 'Сейшелы',
        type: 'patch',
        area: '~455 км²',
        depth: 'до 1000 м',
        biodiversity: '1000+ видов рыб, 300+ видов кораллов',
        description: 'Гранитные острова с уникальными рифами',
        highlights: ['Валле-де-Мэй', 'Морские кокосы', 'Гранитные бухты']
    },
    { 
        name: 'Фиджи', 
        position: [-17.7134, 178.0650], 
        country: 'Фиджи',
        type: 'patch',
        area: '~18,300 км²',
        depth: 'до 1000 м',
        biodiversity: '1200+ видов рыб, 390+ видов кораллов',
        description: 'Мировая столица мягких кораллов',
        highlights: ['Мягкие кораллы', 'Риф Бека', 'Акулы']
    },
    { 
        name: 'Тонга', 
        position: [-21.1789, -175.1982], 
        country: 'Тонга',
        type: 'patch',
        area: '~700 км²',
        depth: 'до 10,000 м (желоб)',
        biodiversity: 'Горбатые киты, манты',
        description: 'Плавание с горбатыми китами',
        highlights: ['Горбатые киты', 'Подводные пещеры', 'Королевство']
    },
    { 
        name: 'Комодо', 
        position: [-8.5594, 119.4883], 
        country: 'Индонезия',
        type: 'patch',
        area: '~1,733 км²',
        depth: 'до 1000 м',
        biodiversity: 'Драконы Комодо, манты, акулы',
        description: 'Драконы и сильные течения',
        highlights: ['Драконы Комодо', 'Манты', 'Сильные течения']
    },
    { 
        name: 'Бали', 
        position: [-8.4095, 115.1889], 
        country: 'Индонезия',
        type: 'patch',
        area: '~5,780 км²',
        depth: 'до 1000 м',
        biodiversity: 'Рыба-луна, манты, акулы',
        description: 'Остров богов с разнообразным дайвингом',
        highlights: ['Рыба-луна', 'Затонувший USAT Liberty', 'Манты']
    },
    { 
        name: 'Тунис (о. Джерба)', 
        position: [33.8076, 10.8451], 
        country: 'Тунис',
        type: 'patch',
        area: '~514 км²',
        depth: 'до 50 м',
        biodiversity: 'Морские черепахи, группперы',
        description: 'Средиземноморские рифы с затонувшими объектами',
        highlights: ['Римские руины под водой', 'Губки', 'Мягкий климат']
    },
];

const reefTypes = {
    barrier: { name: 'Барьерные рифы', color: '#FF6B6B', icon: barrierReefIcon },
    atoll: { name: 'Атоллы', color: '#4ECDC4', icon: atollIcon },
    fringing: { name: 'Окаймляющие рифы', color: '#45B7D1', icon: fringingReefIcon },
    patch: { name: 'Пятнистые рифы', color: '#96CEB4', icon: patchReefIcon }
};

export const Map = () => {
    const [selectedType, setSelectedType] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredReefs = coralReefs.filter(reef => {
        const matchesType = selectedType === 'all' || reef.type === selectedType;
        const matchesSearch = reef.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            reef.country.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="p-1">
            <div className="MagicContainer" style={{ minHeight: "100vh" }}>
                <div className="FishesName">Интерактивная карта коралловых рифов мира</div>

                {/* Фильтры и поиск */}
                <div style={{ 
                    marginBottom: '20px', 
                    padding: '15px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ marginBottom: '15px' }}>
                        <input 
                            type="text"
                            placeholder="🔍 Поиск по названию или стране..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px 15px',
                                borderRadius: '6px',
                                border: '2px solid #e0e0e0',
                                fontSize: '16px',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#4ECDC4'}
                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <strong style={{ marginRight: '10px' }}>Фильтр:</strong>
                        <button 
                            onClick={() => setSelectedType('all')}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: 'none',
                                backgroundColor: selectedType === 'all' ? '#333' : '#e0e0e0',
                                color: selectedType === 'all' ? 'white' : '#333',
                                cursor: 'pointer',
                                fontWeight: selectedType === 'all' ? 'bold' : 'normal',
                                transition: 'all 0.3s'
                            }}
                        >
                            Все рифы ({coralReefs.length})
                        </button>
                        {Object.entries(reefTypes).map(([type, info]) => (
                            <button 
                                key={type}
                                onClick={() => setSelectedType(type)}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    border: 'none',
                                    backgroundColor: selectedType === type ? info.color : '#e0e0e0',
                                    color: selectedType === type ? 'white' : '#333',
                                    cursor: 'pointer',
                                    fontWeight: selectedType === type ? 'bold' : 'normal',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {info.name} ({coralReefs.filter(r => r.type === type).length})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Карта */}
                <div className='Fishes-box'>
                    <div style={{ 
                        width: '100%', 
                        height: '75vh', 
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                        border: '3px solid #4ECDC4'
                    }}>
                        <MapContainer 
                            center={[10, 30]} 
                            zoom={3} 
                            style={{ height: '100%', width: '100%' }}
                            scrollWheelZoom={true}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {filteredReefs.map((reef, index) => (
                                <Marker 
                                    key={index} 
                                    position={reef.position}
                                    icon={reefTypes[reef.type].icon}
                                >
                                    <Popup maxWidth={300}>
                                        <div style={{ minWidth: '250px' }}>
                                            <h3 style={{ 
                                                margin: '0 0 10px 0', 
                                                color: reefTypes[reef.type].color,
                                                borderBottom: `2px solid ${reefTypes[reef.type].color}`,
                                                paddingBottom: '5px'
                                            }}>
                                                {reef.name}
                                            </h3>
                                            <p style={{ margin: '5px 0', fontSize: '13px' }}>
                                                <strong>📍 Страна:</strong> {reef.country}
                                            </p>
                                            <p style={{ margin: '5px 0', fontSize: '13px' }}>
                                                <strong>🏝️ Тип:</strong> {reefTypes[reef.type].name}
                                            </p>
                                            {reef.area && (
                                                <p style={{ margin: '5px 0', fontSize: '13px' }}>
                                                    <strong>📏 Площадь:</strong> {reef.area}
                                                </p>
                                            )}
                                            {reef.depth && (
                                                <p style={{ margin: '5px 0', fontSize: '13px' }}>
                                                    <strong>🌊 Глубина:</strong> {reef.depth}
                                                </p>
                                            )}
                                            {reef.biodiversity && (
                                                <p style={{ margin: '5px 0', fontSize: '13px' }}>
                                                    <strong>🐠 Биоразнообразие:</strong> {reef.biodiversity}
                                                </p>
                                            )}
                                            <p style={{ 
                                                margin: '10px 0 5px 0', 
                                                fontSize: '13px',
                                                fontStyle: 'italic',
                                                backgroundColor: '#f0f0f0',
                                                padding: '8px',
                                                borderRadius: '5px'
                                            }}>
                                                {reef.description}
                                            </p>
                                            {reef.highlights && reef.highlights.length > 0 && (
                                                <div style={{ marginTop: '10px' }}>
                                                    <strong style={{ fontSize: '13px' }}>✨ Особенности:</strong>
                                                    <ul style={{ margin: '5px 0', paddingLeft: '20px', fontSize: '12px' }}>
                                                        {reef.highlights.map((highlight, i) => (
                                                            <li key={i}>{highlight}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>

                    {/* Легенда */}
                    <div style={{ 
                        marginTop: '20px', 
                        padding: '20px', 
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                        <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#333' }}>
                            🗺️ Легенда карты
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
                            {Object.entries(reefTypes).map(([type, info]) => {
                                const count = coralReefs.filter(r => r.type === type).length;
                                return (
                                    <div key={type} style={{ 
                                        display: 'flex', 
                                        alignItems: 'center',
                                        padding: '10px',
                                        backgroundColor: '#f9f9f9',
                                        borderRadius: '8px',
                                        border: `2px solid ${info.color}`
                                    }}>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor: info.color,
                                            marginRight: '10px',
                                            border: '2px solid white',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                        }}></div>
                                        <div>
                                            <strong>{info.name}</strong>
                                            <div style={{ fontSize: '12px', color: '#666' }}>
                                                {count} {count === 1 ? 'локация' : 'локации'}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '8px' }}>
                            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
                                <strong>ℹ️ Информация:</strong> На карте представлено <strong>{coralReefs.length}</strong> локаций 
                                коралловых рифов по всему миру. Нажмите на маркер для получения детальной информации о каждом рифе.
                                Используйте фильтры и поиск для быстрого поиска нужной локации.
                            </p>
                        </div>

                        {filteredReefs.length === 0 && (
                            <div style={{ 
                                marginTop: '20px', 
                                padding: '20px', 
                                backgroundColor: '#fff3cd',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <p style={{ margin: 0, fontSize: '16px' }}>
                                    😕 Не найдено рифов по заданным критериям. Попробуйте изменить фильтры или поисковый запрос.
                                </p>
                            </div>
                        )}

                        {filteredReefs.length > 0 && filteredReefs.length < coralReefs.length && (
                            <div style={{ 
                                marginTop: '20px', 
                                padding: '15px', 
                                backgroundColor: '#d1ecf1',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                                <p style={{ margin: 0, fontSize: '14px' }}>
                                    📌 Показано <strong>{filteredReefs.length}</strong> из <strong>{coralReefs.length}</strong> локаций
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
