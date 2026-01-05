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
                    
                </Routes>
            </main>
        </>
    );
}

export default App;
