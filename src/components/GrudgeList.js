import React, { useContext } from 'react';
import Grudge from './Grudge';
import '../styles/GrudgeList.css';
import { GrudgeContext } from '../contexts/grudgeContext';

export default function GrudgeList() {
    const grudges = useContext(GrudgeContext);

    return (
        <div className='GrudgeList'>
            <div>
                <h3 className='current-grudges'>
                    Current Grudges: {grudges.length}
                </h3>
            </div>
            {
                grudges.map(g => (
                    <Grudge grudge={g} key={g.id} />
                ))
            }
        </div>
    )
}
