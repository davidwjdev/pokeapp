import React from 'react';
import './top.css';
import Pokemon from './img/pokemon.png';
import Pokeball from './img/pokeball.png';


export default function Top() {
    return (
        <div className='top-background'>
            <div className='top-img-name'>
                <img src={Pokemon} alt='Pokemon' className='top-img'/>
            </div>
            <div className='top-img-icon'>
            <img src={Pokeball} alt='Pokeball' className='top-img'/>
            </div>
        </div>
    )
}