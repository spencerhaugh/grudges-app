import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/grudgeContext';
import '../styles/Grudge.css';

export default function Grudge({ grudge, forgive }) {
    const dispatch = useContext(DispatchContext);
    
    const handleForgive = () => {
        dispatch({ type: 'FORGIVE', payload: grudge.id});
    };
    const handleDelete = () => {
        dispatch({type: 'DELETE', payload: grudge.id});
    };
    
    return (
        <div className='Grudge'>
            <div className='guilty-party'>
                <h3>{ grudge.name }</h3>
            </div>
            <div className='crimes'>
                <p>{ grudge.grivence }</p>
            </div>
            <div className='grudge-footer'>
                <div className='forgiven-status'>
                    <label htmlFor='forgiven'>Forgiven? </label>
                    <input type='checkbox' name='forgiven' id='forgiven' checked={grudge.forgiven} onChange={handleForgive} />
                </div>
                <button className='deleteBtn' onClick={handleDelete}>DELETE</button>
            </div>
        </div>
    )
};
