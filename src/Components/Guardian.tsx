import React, { useState } from 'react'

import { Character } from '../Contexts/GuardianContext';

interface Props {
    character: Character,
    handleClick?: CallableFunction
}

const Guardian: React.FC<Props> = ({ character, handleClick }) => {

    const [selected, setselected] = useState(false);

    return (
        <div className="guardian" onClick={() => setselected(handleClick?.(character.name))}>
            <div className="imageArea">
                <img className={(selected ? "selected-border" : "portrait-border") + " portrait"} alt="" src={character.img}/>
            </div>
            <p className="description">{character.name}</p>
        </div>
    );
}

export default Guardian;