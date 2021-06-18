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
};

interface Props {
    guardian: Character;
};

const Guardian: React.FC<Props> = ({ guardian }) => {
    const [selected, setSelected] = useState(false);
    const stats = (
    <div className="stats">
        <p id="hp">
            Element: { guardian.school } <br/>
            HP: { guardian.hp } <br/>
            Attack: { guardian.atk } <br/>
            Defense: { guardian.def } <br/>
            DR: { guardian.dr } <br/>
            Crit Chance: { guardian.crit }% <br/>
            Heal: { guardian.heal } <br/>
            Chain: { guardian.chain } <br/>
        </p>
    </div>
    );

    return (
        <div onClick={ () => setSelected(!selected) } className={`guardian ${guardian.school.toLowerCase()}`}>
            <div className="imageArea">
                <img className="portrait" src={ guardian.img }/>
                <div>{ selected ? stats : null }</div>
            </div>
            <div className="description">
                <p>{guardian.name}</p>
            </div>
        </div>
    );
}

export default Guardian