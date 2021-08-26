import React from 'react';
import Grudge from './Grudge';
import '../styles/GrudgeList.css';

export default function GrudgeList({ grudges, forgive }) {
    
    return (
        <div className='GrudgeList'>
            <div>
                <h3>
                    Current Grudges: {grudges.length}
                </h3>
            </div>
            {
                grudges.map(g => (
                    <Grudge grudge={g} forgive={forgive} key={g.id} />
                ))
            }
        </div>
    )
}
