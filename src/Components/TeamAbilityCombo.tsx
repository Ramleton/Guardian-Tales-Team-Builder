import React, { useContext } from 'react'

import { Character } from '../Contexts/GuardianContext';
import Guardian from './Guardian';
import { TeamContext } from '../Contexts/TeamContext';

const TeamAbilityCombo: React.FC = () => {

    const guardians: Character[] = useContext(TeamContext);

    type Combo = string[];

    const possibleChain = (chainsFrom: string, chainsTo: string): boolean => {
        if (chainsFrom === "All") return true;
        switch(chainsTo) {
            case "All":
            case chainsFrom:
                return true;
            default:
                return false;
        }
    }

    const findAllCombos = (): any => {

        const findAllCombosHelper = (possible: Character[], remaining: Character[]): any => {
            return possible.map(guardian => {
                const chainsTo = guardian.chain.split(" to ")[1];
                const remainingGuardians = remaining.filter(element => element.name !== guardian.name);
                const possibleGuardians = remainingGuardians.filter(element => possibleChain(element.chain.split(" to ")[0], chainsTo));
                return [guardian.name, findAllCombosHelper(possibleGuardians, remainingGuardians)];
            }).flat();
        };

        return guardians.map(guardian => {
            const chainsTo = guardian.chain.split(" to ")[1];
            const remainingGuardians = guardians.filter(element => element.name !== guardian.name);
            const possibleGuardians = remainingGuardians.filter(element => possibleChain(element.chain.split(" to ")[0], chainsTo));
            return [guardian.name, findAllCombosHelper(possibleGuardians, remainingGuardians)];
        });
    }

    const nestedArrayToSeparateArrays = (arr: string | Array<string>): Array<Array<string>> => {
        if (arr[1].length === 0) {
            return [[arr[0]]];
        } else {
            const arrays: Array<Array<string>> = [];
            for (let i = 0; i < arr.length - 1; i += 2) {
                if (arr[i + 1].length > 0) {
                    nestedArrayToSeparateArrays(arr[i + 1])
                    .forEach((split: Array<string>) => {
                        split.unshift(arr[i]);
                        arrays.push(split);
                    });
                }
            }
            return arrays;
        }
    };

    const comboToElement = (combo: Combo) => {
        const getImgElementForType = (type: string) => {
            switch(type) {
                case "Injured":
                    return <img className="chain-img" src="/Images/Weapon_Effects/Injured.png" alt="" />;
                case "Downed":
                    return <img className="chain-img" src="/Images/Weapon_Effects/Downed.png" alt="" />;
                case "Airborne":
                    return <img className="chain-img" src="/Images/Weapon_Effects/Airborne.png" alt="" />;
                default:
                    return <img className="chain-img" src="/Images/Weapon_Effects/All.png" alt="" />;
            }
        }

        return <ul className="chain-list">
            {combo.map((char_name: string, index: number) => {
                const guardian = guardians.filter((guardian: Character) => guardian.name === char_name)[0];
                const [comboFrom, comboTo] = guardian ? guardian.chain.split(" to ").map(type => getImgElementForType(type)) : [<></>, <></>];
                if (guardian.name === "Nari") {
                    console.log(guardian.chain);
                }
                const guardianElement = <Guardian character={guardian} />
                return <li key={index.toString()} >{comboFrom}<div className="chain-guardian chain-item">{guardianElement}</div>{comboTo}</li>
            })}
        </ul>
    }

    const combosPerGuardian: Array<Array<Combo>> = findAllCombos().map((combo: Array<string>) => nestedArrayToSeparateArrays(combo));
    const fullCombos = (
            <div>
                <h2>Full Chains</h2>
                {combosPerGuardian.map(guardianCombo => guardianCombo.filter(combo => combo.length === 4).map(combo => comboToElement(combo)))}
                <h2>Incomplete Chains</h2>
                {combosPerGuardian.map(guardianCombo => guardianCombo.filter(combo => combo.length !== 4).map(combo => comboToElement(combo)))}
            </div>
        )

    return guardians.length > 0 ?
        (<div>
            <h1>Ability Chains</h1>
            {fullCombos}
        </div>) : <></>
}

export default TeamAbilityCombo;