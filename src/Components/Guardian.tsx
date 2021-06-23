import React, { useState } from 'react'

import { Character } from '../Contexts/GuardianContext';

interface Props {
    character: Character,
    handleClick?: CallableFunction
}

const Guardian: React.FC<Props> = ({ character, handleClick }) => {

    const [selected, setselected] = useState(false);

    const shortenName = () => {
        return character.name.length > 10 ? character.name.split(" ").map(word => {
            return word.match(/^[A-Za-z]+$/) ? word[0].concat(".") : word.concat(" ");
        }) : character.name;
    }

    return (
        <div className="guardian" onClick={() => setselected(handleClick?.(character.name))}>
            <div className="imageArea">
                <img className={(selected ? "selected-border" : "portrait-border") + " portrait"} alt={character.name} src={character.img}/>
            </div>
            <p className="description">{shortenName()}</p>
        </div>
    );
}

export default Guardian;