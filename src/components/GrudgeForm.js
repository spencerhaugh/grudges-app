import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../styles/GrudgeForm.css';

export default function GrudgeForm(props) {
    const [grudgeName, setGrudgeName] = useState('');
    const [grudgeValue, setGrudgeValue] = useState('');
    const id = uuid();

    const handleGrudge = (e) => {
        setGrudgeValue(e.target.value);
    };
    const handlePerson = (e) => {
        setGrudgeName(e.target.value);
    };
    const { handleSubmit } = props;

    const handleNewGrudge = (e) => {
        e.preventDefault();
        const newGrudge = {
            id: id,
            name: grudgeName,
            grivence: grudgeValue,
            forgiven: false
        }
    };

    return (
        <section className='newGrudgeForm'>
            <form onSubmit={handleNewGrudge} className='GrudgeForm'>
                <label htmlFor='name'>Name: </label>
                <input id='name' name='name' onChange={handlePerson} placeholder='The guilty party...' />
                <label htmlFor='grudgeDetail'>Grudge Details: </label>
                <textarea onChange={handleGrudge} placeholder='Their crimes...' />
                <button type='submit'>Log New Grudge</button>
            </form>
        </section>
    )
}
