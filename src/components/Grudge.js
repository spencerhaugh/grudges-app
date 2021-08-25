import React from 'react';

export default function Grudge({ grudge, forgive }) {
    const handleForgive = () => {
        forgive(grudge);
    };
    return (
        <div className='Grudge'>
            <h3>{ grudge.name }</h3>
            <h5>{ grudge.grivence }</h5>
            <input type='checkbox' name='forgiven' id='forgiven' checked={grudge.forgiven} onChange={handleForgive} />
            <label htmlFor='forgiven'>Forgiven</label>
        </div>
    )
};
