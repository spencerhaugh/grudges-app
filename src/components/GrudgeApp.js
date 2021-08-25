import React, { useState } from 'react';
import GrudgeForm from './GrudgeForm';
import GrudgeList from './GrudgeList';
import seedData from '../seed';

export default function GrudgeApp() {
    const initialState = seedData;
    const [grudges, setGrudges] = useState(initialState);

    const handleSubmit = (newGrudge) => {
        setGrudges([newGrudge, ...grudges]);
    };

    const forgive = (grudge) => {
        const updatedGrudges = grudges.map(g => 
            g.id === grudge.id ? {...g, forgiven: !g.forgiven} : g
        );
        setGrudges(updatedGrudges);
    };
    
    return (
        <div>
            <h1>Grudge App!</h1>
            <GrudgeForm handleSubmit={handleSubmit} />
            <GrudgeList grudges={grudges} forgive={forgive} />
            {/* AppBar */}
            {/* GrudgeForm - add grudges */}
            {/* GrudgeList - list current grudges */}
        </div>
    )
}
