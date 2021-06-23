import React, { useContext, useEffect, useReducer } from 'react'

import { Character } from '../Contexts/GuardianContext';
import { TeamContext } from '../Contexts/TeamContext';

type State = {
    "Toughness": number,
    "ATK": number,
    "DEF": number,
    "HP": number,
    "Range ATK": number,
    "Range DEF": number,
    "Melee ATK": number,
    "Melee DEF": number,
    "Skill ATK": number,
    "Light ATK": number,
    "Dark ATK": number,
    "Basic ATK": number,
    "Water ATK": number,
    "Earth ATK": number,
    "Fire ATK": number,
    "Crit Hit Chance": number,
    "Weapon Skill Regen Speed": number,
    "HP Recovery on Enemy Kill": number,
    "Shield Increase on Battle Start": number,
    "Atk, Heal for Chain Skills Targeting Injured": number,
}

type Action = {
    type: string,
    amount: number
}

const defaultState = {
    "Toughness": 0,
    "ATK": 0,
    "DEF": 0,
    "HP": 0,
    "Range ATK": 0,
    "Range DEF": 0,
    "Melee ATK": 0,
    "Melee DEF": 0,
    "Skill ATK": 0,
    "Light ATK": 0,
    "Dark ATK": 0,
    "Basic ATK": 0,
    "Water ATK": 0,
    "Earth ATK": 0,
    "Fire ATK": 0,
    "Crit Hit Chance": 0,
    "Weapon Skill Regen Speed": 0,
    "HP Recovery on Enemy Kill": 0,
    "Shield Increase on Battle Start": 0,
    "Atk, Heal for Chain Skills Targeting Injured": 0,
}

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case "Toughness":
            return {...state, "Toughness": state["Toughness"] + action.amount}
        case "ATK":
            return {...state, "ATK": state["ATK"] + action.amount};
        case "DEF":
            return ({...state, "DEF": state["DEF"] + action.amount});
        case "HP":
            return ({...state, "HP": state["HP"] + action.amount});
        case "Range ATK":
            return ({...state, "Range ATK": state["Range ATK"] + action.amount});
        case "Range DEF":
            return ({...state, "Range DEF": state["Range DEF"] + action.amount});
        case "Melee ATK":
            return ({...state, "Melee ATK": state["Melee ATK"] + action.amount});
        case "Melee DEF":
            return ({...state, "Melee DEF": state["Melee DEF"] + action.amount});
        case "Skill ATK":
            return ({...state, "Skill ATK": state["Skill ATK"] + action.amount});
        case "Light ATK":
            return ({...state, "Light ATK": state["Light ATK"] + action.amount});
        case "Dark ATK":
            return ({...state, "Dark ATK": state["Dark ATK"] + action.amount});
        case "Basic ATK":
            return ({...state, "Basic ATK": state["Basic ATK"] + action.amount});
        case "Water ATK":
            return ({...state, "Water ATK": state["Water ATK"] + action.amount});
        case "Earth ATK":
            return ({...state, "Earth ATK": state["Earth ATK"] + action.amount});
        case "Fire ATK":
            return ({...state, "Fire ATK": state["Fire ATK"] + action.amount});
        case "Crit Hit Chance":
            return ({...state, "Crit Hit Chance": state["Crit Hit Chance"] + action.amount});
        case "Weapon Skill Regen Speed":
            return ({...state, "Weapon Skill Regen Speed": state["Weapon Skill Regen Speed"] + action.amount});
        case "HP Recovery on Enemy Kill": 
            return ({...state, "HP Recovery on Enemy Kill": state["HP Recovery on Enemy Kill"] + action.amount});
        case "Shield Increase on Battle Start":
            return ({...state, "Shield Increase on Battle Start": state["Shield Increase on Battle Start"] + action.amount});
        case "Atk, Heal for Chain Skills Targeting Injured":
            return ({...state, "Atk, Heal for Chain Skills Targeting Injured": state["Atk, Heal for Chain Skills Targeting Injured"] + action.amount});
        case "Reset":
            return defaultState;
        default:
            return state;
    }
}

const TeamStats: React.FC = () => {

    const [stats, dispatch] = useReducer(reducer, defaultState);

    const guardians: Character[] = useContext(TeamContext);

    useEffect(() => {
        dispatch({ type: "Reset", amount: 0})
        guardians.forEach(guardian => {
            if (guardian.party_buff.includes(", ")) {
                guardian.party_buff.replace("%", "").split(", ").forEach(buff => {
                    const [buffName, buffAmount] = buff.split(" +");
                    dispatch({ type: buffName, amount: parseInt(buffAmount) });
                });
            } else {
                const [buff, buffAmount] = guardian.party_buff.replace("%", "").split(" +");
                dispatch({ type: buff, amount: parseInt(buffAmount) });
            }
            const toughness = guardian.hp * (1 + guardian.def/100>>0);
            dispatch({ type: "Toughness", amount: toughness});
        });
    }, [guardians])

    function listAllBuffs(): JSX.Element {
        return (
            <ul className="white stats">
                <li>{`Toughness: ${stats.Toughness}`}</li>
                {
                    Object.entries(stats)
                    .filter(([buffName, buffAmount]) => !["DPS", "Toughness"]
                    .includes(buffName) && buffAmount !== 0)
                    .map(([buff, buffAmount], index: number) => {
                        return <li key={index}>{`${buff}: +${buffAmount}%`}</li>
                    })
                }
            </ul>
        )
    }

    return (
        <div className="column">
            {guardians.length > 0 && <>
                <h1 className="white underlined-text centered-text">Party Stats and Effects</h1>
                <div className="centered-items">
                    {listAllBuffs()}
                </div>
            </>}
        </div>
    )
}

export default TeamStats;