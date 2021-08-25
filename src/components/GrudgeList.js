import React from 'react';
import Grudge from './Grudge';

export default function GrudgeList({ grudges, forgive }) {
    
    return (
        <div className='GrudgeList'>
            {
                grudges.map(g => (
                    <Grudge grudge={g} forgive={forgive} key={g.id} />
                ))
            }
        </div>
    )
}
