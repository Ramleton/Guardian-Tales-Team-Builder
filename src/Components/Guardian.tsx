import React from 'react'

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
    console.log(guardian.img)
    return (
        <div>
            <img className="portrait" src={guardian.img} />
            <p>{guardian.name}</p>
        </div>
    );
}

export default Guardian