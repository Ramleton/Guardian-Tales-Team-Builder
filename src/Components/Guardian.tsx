import React, {useState} from 'react'

import { Character } from '../Contexts/GuardianContext';

interface Props {
    guardian: Character;
};

const Guardian: React.FC<Props> = ({ guardian }) => {
    const [selected, setSelected] = useState(false);

    return (
        <div onClick={ () => setSelected(!selected) } className={`guardian ${guardian.school.toLowerCase()}`}>
            <div className="imageArea">
                <img className="portrait" src={ guardian.img }/>
            </div>
            <div className="description">
                <p>{guardian.name}</p>
            </div>
        </div>
    );
}

export default Guardian