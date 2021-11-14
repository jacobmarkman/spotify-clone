import React from 'react';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import Sidebar from './Sidebar';

export const Player = ( {spotify} ) => {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar />
            <Body spotify={spotify}/>

            </div>
            <Footer />
        </div>
    )
}
