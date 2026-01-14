import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Route, Routes } from "react-router-dom"
import '../App.css';
import '../menu.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Magicworld } from "./magicworld";
import { Layout } from '../layout';
import { SafeFishes } from './safe-fishes';
import { DangerousFishes } from './dangerous-fishes';
import { NoFishes } from './no-fishes';
import { Contacts } from './contacts';
import { Fish } from '../components/fish';




function App() {
    return (
        <>
            <Menu pageWrapId='main'>
                <a id="home" className="menu-item" href="/">Домой</a>
                <a id="safe-fishes" className="menu-item" href="/safe-fishes">Безопасные рыбы</a>
                <a id="dangerous-fishes" className="menu-item" href="/dangerous-fishes">Опасные рыбы</a>
                <a id="no-fishes" className="menu-item" href="/no-fishes">Не рыбы</a>
                <a id="contacts" className="menu-item" href="/contacts">Контакты</a>
                

            </Menu>
            <main id='main'>
                <Routes>
                    <Route path='/' element={<Layout><Magicworld /></Layout>} />
                    <Route path='/safe-fishes' element={<Layout><SafeFishes /></Layout>} />
                    <Route path='/dangerous-fishes' element={<Layout><DangerousFishes /></Layout>} />
                    <Route path='/no-fishes' element={<Layout><NoFishes /></Layout>} />
                    <Route path='/contacts' element={<Layout><Contacts /></Layout>} />

                    <Route path='/fish/:fishName' element={<Layout><Fish /></Layout>} />

                    {/*<Route path='/contacts' element={<Layout><Corals /></Layout>} />
                    <Route path='/contacts' element={<Layout><Jelly-fish /></Layout>} />
                    <Route path='/contacts' element={<Layout><Molusks /></Layout>} />
                    <Route path='/contacts' element={<Layout><Octopus /></Layout>} />
                    <Route path='/contacts' element={<Layout><Scquids /></Layout>} />
                    <Route path='/contacts' element={<Layout><Stars /></Layout>} />
                    <Route path='/contacts' element={<Layout><Turtle /></Layout>} />

                    <Route path='/contacts' element={<Layout><Angels /></Layout>} />
                    <Route path='/contacts' element={<Layout><Antias /></Layout>} />
                    <Route path='/contacts' element={<Layout><Cezii /></Layout>} />
                    <Route path='/contacts' element={<Layout><Dolphin /></Layout>} />
                    <Route path='/contacts' element={<Layout><Dugon /></Layout>} />
                    <Route path='/contacts' element={<Layout><Flute /></Layout>} />
                    <Route path='/contacts' element={<Layout><Grupper /></Layout>} />
                    <Route path='/contacts' element={<Layout><Kabubas /></Layout>} />
                    <Route path='/contacts' element={<Layout><Kuzovok /></Layout>} />
                    <Route path='/contacts' element={<Layout><Lips-fishes /></Layout>} />
                    <Route path='/contacts' element={<Layout><Napoleon /></Layout>} />
                    <Route path='/contacts' element={<Layout><Nemo /></Layout>} />
                    <Route path='/contacts' element={<Layout><Parrot /></Layout>} />
                    <Route path='/contacts' element={<Layout><Platex /></Layout>} />
                    <Route path='/contacts' element={<Layout><Scolopsis /></Layout>} />
                    <Route path='/contacts' element={<Layout><Soldiers /></Layout>} />
                    <Route path='/contacts' element={<Layout><Tuna /></Layout>} />
                    <Route path='/contacts' element={<Layout><Zebrosoma /></Layout>} />
                    <Route path='/contacts' element={<Layout><Whisperes /></Layout>} />

                    <Route path='/contacts' element={<Layout><Arotron /></Layout>} />
                    <Route path='/contacts' element={<Layout><Balistod /></Layout>} />
                    <Route path='/contacts' element={<Layout><Baracuda /></Layout>} />
                    <Route path='/contacts' element={<Layout><Crocodile /></Layout>} />
                    <Route path='/contacts' element={<Layout><Huer-fish /></Layout>} />
                    <Route path='/contacts' element={<Layout><Lionfish /></Layout>} />
                    <Route path='/contacts' element={<Layout><Murena /></Layout>} />
                    <Route path='/contacts' element={<Layout><Long-winged-fish /></Layout>} />
                    <Route path='/contacts' element={<Layout><Sea-snake /></Layout>} />
                    <Route path='/contacts' element={<Layout><Sharks-black /></Layout>} />
                    <Route path='/contacts' element={<Layout><Sharks-cow /></Layout>} />
                    <Route path='/contacts' element={<Layout><Shars-maco /></Layout>} />
                    <Route path='/contacts' element={<Layout><Sharks-nuss /></Layout>} />
                    <Route path='/contacts' element={<Layout><Srarks-white /></Layout>} />
                    <Route path='/contacts' element={<Layout><Sharks-zebra /></Layout>} />
                    <Route path='/contacts' element={<Layout><Skat1 /></Layout>} />
                    <Route path='/contacts' element={<Layout><Skat2 /></Layout>} />
                    <Route path='/contacts' element={<Layout><Skat3 /></Layout>} />
                    <Route path='/contacts' element={<Layout><Spinorog /></Layout>} />
                    <Route path='/contacts' element={<Layout><Stone-fish /></Layout>} />
                    <Route path='/contacts' element={<Layout><Surgeon /></Layout>} />
                    <Route path='/contacts' element={<Layout><Tigger-fish /></Layout>} />
                    <Route path='/contacts' element={<Layout><Tulozur /></Layout>} />
                    <Route path='/contacts' element={<Layout><While-sharks /></Layout>} />
                  */}

                    
                </Routes>
            </main>
        </>
    );
}

export default App;
