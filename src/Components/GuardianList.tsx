import React, { useState } from 'react'

import Guardian from "./Guardian"

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
    guardians: Character[]
}

const GuardianList: React.FC<Props> = ({ guardians }) => {
    /* 
        <filteredGuardian> is given when the user searches for a
        specific guardian by name. It's then used to filter the
        table of guardians.
    */
    const [search, handleChange] = useState("");
    // Get every guardian in <guardians> that is in <school> and filters by name using <filteredGuardian>
    const getGuardiansOfSchool = (school: string): JSX.Element[] => {
        return guardians
            .filter((guardian) => {return guardian.school === school})
            .filter((guardian) => {return guardian.name.toLowerCase().includes(search.toLowerCase())})
            .map((guardian, index) => {
                return (<td key={index}><Guardian guardian={guardian}/></td>)
        })
    }

    return (
        <>
            <div className="guardianFilter">
                <label htmlFor="guardianSearch">Search by Name:</label>
                <input
                    id="filteredGuardian" name="filteredGuardian" type="search" placeholder="Guardian Name"
                    value={search} onChange={e => handleChange(e.target.value)}
                />
            </div>
            <div className="list">
                <table>
                    <tbody>
                        <tr><td className="element light">Light</td>{getGuardiansOfSchool("Light")}</tr>
                        <tr><td className="element dark">Dark</td>{getGuardiansOfSchool("Dark")}</tr>
                        <tr><td className="element basic">Basic</td>{getGuardiansOfSchool("Basic")}</tr>
                        <tr><td className="element water">Water</td>{getGuardiansOfSchool("Water")}</tr>
                        <tr><td className="element earth">Earth</td>{getGuardiansOfSchool("Earth")}</tr>
                        <tr><td className="element fire">Fire</td>{getGuardiansOfSchool("Fire")}</tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GuardianList