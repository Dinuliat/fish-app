import React from 'react';
import {slide as Menu} from 'react-burger-menu'
import './App.css';
import './menu.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Magicworld} from "./magicworld";

function App() {
    return (
        <>
            <Menu pageWrapId='main'>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
            <main id='main'>
                <div className="App vh-100">
                    <Magicworld/>
                </div>
            </main>
        </>
    );
}

export default App;
