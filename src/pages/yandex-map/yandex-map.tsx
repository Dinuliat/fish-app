import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import { coralReefs, reefTypes } from './map-info/map-markers';
import './yandex-map.css';

export const YandexMap = () => {
    const [selectedType, setSelectedType] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredReefs = coralReefs.filter(reef => {
        const matchesType = selectedType === 'all' || reef.type === selectedType;
        const matchesSearch = reef.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            reef.country.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="p-0">
            <div className="MagicContainer" style={{minHeight: "100vh" }}>

                <div className="FishesName">Карта коралловых рифов мира</div>

                <div className='map-box p-3'>

                    <div className="map-host">

                        <YMaps query={{ lang: 'ru_RU' }}>
                            <Map
                                defaultState={{ center: [10, 30], zoom: 3 }}
                                width="100%"
                                height="100%"
                                modules={["control.ZoomControl", "control.FullscreenControl"]}

                                instanceRef={(ref) => {
                                    if (ref) {
                                        // Принудительно устанавливаем размеры, если они не подтянулись
                                        const el = ref.container.getElement();
                                        if (el) {
                                            el.style.width = '100%';
                                            el.style.height = '100%';
                                        }
                                        // Вызываем автоподгонку размера
                                        ref.container.fitToViewport();
                                    }
                                }}
                            >

                                {/* Подключение ZoomControl */}
                                <ZoomControl options={{ position: { top: 10, left: 10 } }} />

                                {filteredReefs.map((reef, index) => (
                                    <Placemark
                                        key={index}
                                        geometry={reef.position}
                                        modules={['geoObject.addon.balloon']}
                                        properties={{
                                            balloonContentHeader: `<h3 style="margin: 0; color: ${reefTypes[reef.type].color};">${reef.name}</h3>`,
                                            balloonContentBody: `
                                                    <div style="min-width: 250px; color: #3c4041;">
                                                        <p style="margin: 5px 0; font-size: 13px;"><strong>🚩 Страна:</strong> ${reef.country}</p>
                                                        <p style="margin: 5px 0; font-size: 13px;"><strong>🏝️ Тип:</strong> ${reefTypes[reef.type].name}</p>
                                                        ${reef.area ? `<p style="margin: 5px 0; font-size: 13px;"><strong>📏 Площадь:</strong> ${reef.area}</p>` : ''}
                                                        ${reef.depth ? `<p style="margin: 5px 0; font-size: 13px;"><strong>🌊 Глубина:</strong> ${reef.depth}</p>` : ''}
                                                        ${reef.biodiversity ? `<p style="margin: 5px 0; font-size: 13px;"><strong>🐠 Биоразнообразие:</strong> ${reef.biodiversity}</p>` : ''}
                                                        <p style="margin: 10px 0 5px 0; font-size: 13px; font-style: italic; background-color: #c6effc; padding: 8px; border-radius: 5px;">${reef.description}</p>
                                                        ${reef.highlights && reef.highlights.length > 0 ? `
                                                            <div style="margin-top: 10px;">
                                                                <strong style="font-size: 13px;">🍀 Особенности:</strong>
                                                                <ul style="margin: 5px 0; padding-left: 20px; font-size: 12px; color: #20b1de;">
                                                                    ${reef.highlights.map(h => `<li>${h}</li>`).join('')}
                                                                </ul>
                                                            </div>
                                                        ` : ''}
                                                    </div>
                                                `,
                                        }}
                                        options={{
                                            preset: 'islands#circleIcon',
                                            iconColor: reefTypes[reef.type].color,
                                        }}
                                    />
                                ))}
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div >

    )
}
