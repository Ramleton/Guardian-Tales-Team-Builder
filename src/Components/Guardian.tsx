import React, {useState} from 'react'

type Character = {
    name: string,
    school: "Earth" | "Water" | "Fire" | "Light" | "Basic" | "Dark",
    tier: number,
    atk: number,
    hp: number,
    def: number,
    dr: number,
    crit: number,
    heal: number,
    chain: string,
    party_buff: string
    img: string
}

interface Props {
    guardian: Character;
}

const Guardian: React.FC<Props> = ({ guardian }) => {
    const [selected, setSelected] = useState(false);

    return (
        <div onClick={ () => setSelected(!selected) } className="guardian">
            <img className="portrait" src={guardian.img} />
            <div className="description">
                <p>{guardian.name}</p>
            </div>
        </div>
    );
}

export default Guardian