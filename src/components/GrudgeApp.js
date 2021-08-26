import React from 'react';
import GrudgeForm from './GrudgeForm';
import GrudgeList from './GrudgeList';
import '../styles/GrudgeApp.css';
import { GrudgeProvider } from '../contexts/grudgeContext';

export default function GrudgeApp() {

    return (
        <div className='GrudgeApp'>
            <h1>Grudge List</h1>
            <GrudgeProvider>
                <GrudgeForm />
                <GrudgeList />
            </GrudgeProvider>
        </div>
    )
}
