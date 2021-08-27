import React, { useContext } from 'react';
import '../styles/GrudgeForm.css';
import { DispatchContext } from '../contexts/grudgeContext';
import useInputState from '../hooks/useInputState';

export default function GrudgeForm(props) {

    const [grudgeName, handleNameChange, resetName] = useInputState('');
    const [grudgeValue, handleValueChange, resetValue] = useInputState('');
    const dispatch = useContext(DispatchContext);

    const clearForm = () => {
        resetName('');
        resetValue('');
    }

    const handleNewGrudge = (e) => {
        e.preventDefault();
        const newGrudge = {
            name: grudgeName,
            grivence: grudgeValue
        };
        if (!!grudgeValue && !!grudgeName) {
            dispatch( {type: 'ADD_NAME', payload: newGrudge} )
        };
        clearForm();
    };

    return (
        <section className='newGrudgeForm'>
            <form onSubmit={handleNewGrudge} className='GrudgeForm'>
                <label htmlFor='name'>Name: </label>
                <input id='name' name='name' value={grudgeName} onChange={handleNameChange} placeholder='The guilty party...' />
                <label htmlFor='grudgeDetail'>Grudge Details: </label>
                <textarea value={grudgeValue} onChange={handleValueChange} placeholder='Their crimes...' />
                <button type='submit'>Log New Grudge</button>
            </form>
        </section>
    )
}
