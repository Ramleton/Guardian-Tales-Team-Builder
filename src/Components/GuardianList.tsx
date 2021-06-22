import { Character, GuardianContext } from '../Contexts/GuardianContext'
import React, { useContext, useState } from 'react'

import Guardian from './Guardian'

interface Props {
    buildTeam: CallableFunction
}

const GuardianList: React.FC<Props> = ({ buildTeam }) => {

    const guardianData: Character[] = useContext(GuardianContext);
    const [selectedGuardians, setselectedGuardians]: [string[], CallableFunction] = useState([]);

    const handleSelectedGuardian = (guardianName: string) => {
        if (selectedGuardians.length < 4 && !selectedGuardians.includes(guardianName)) {
            setselectedGuardians(selectedGuardians.concat([guardianName]))
            return true;
        } else if (selectedGuardians.includes(guardianName)) {
            setselectedGuardians(selectedGuardians.filter(guardian => guardian !== guardianName));
        } else {
            alert("You already have 4 team members! Remove one to add another");
        }
        return false;
    }

    interface GuardianElement {
        data: Character,
        element: JSX.Element
    }

    let guardianElements: GuardianElement[] = [];
    
    guardianData.forEach((data) => {guardianElements.push({data: data, element: <Guardian character={data} handleClick={handleSelectedGuardian}/>})})

    // Returns a row of guardians that are of the element <element>
    const getGuardiansOfElement = (element: string): JSX.Element => {
        return (
            <tr className={element.toLowerCase()}><td className="element">{element}</td>
                {guardianElements.filter(guardian => guardian.data.school === element).map((guardian, index) => {
                    return (<td key={`${element} ${index}`}>{guardian.element}</td>);
                })}
            </tr>
        )
    }
    
    return (
        <div className="list">
            <input type="button" value="Build Team" onClick={() => {
                if (selectedGuardians.length === 4) {
                    buildTeam(selectedGuardians);
                } else {
                    alert("Your team must contain 4 members");
                }
            }} />
            <table>
                <tbody>
                    {getGuardiansOfElement("Light")}
                    {getGuardiansOfElement("Dark")}
                    {getGuardiansOfElement("Basic")}
                    {getGuardiansOfElement("Water")}
                    {getGuardiansOfElement("Earth")}
                    {getGuardiansOfElement("Fire")}
                </tbody>
            </table>
        </div>
    );
}

export default GuardianList;