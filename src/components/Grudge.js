import React from 'react';
import '../styles/Grudge.css';

export default function Grudge({ grudge, forgive }) {
    const handleForgive = () => {
        forgive(grudge);
    };
    return (
        <div className='Grudge'>
            <div className='guilty-party'>
                <h3>{ grudge.name }</h3>
            </div>
            <div className='crimes'>
                <p>{ grudge.grivence }</p>
            </div>
            <div className='forgiven-status'>
                <label htmlFor='forgiven'>Forgiven? </label>
                <input type='checkbox' name='forgiven' id='forgiven' checked={grudge.forgiven} onChange={handleForgive} />
            </div>
        </div>
    )
};
