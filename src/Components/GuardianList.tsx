import Guardian from "./Guardian"
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
    guardians: Character[]
}

const GuardianList: React.FC<Props> = ({ guardians }) => {
    
    // Get every guardian in <guardians> that is in <school>
    const getGuardiansOfSchool = (school: string): JSX.Element[] => {
        return guardians.filter((guardian) => {return guardian.school === school}).map((guardian, index) => {
            return (<td key={index}><Guardian guardian={guardian}/></td>)
        })
    }
    
    return (
        <div className="list">
            <table>
                <tbody>
                    <tr>{getGuardiansOfSchool("Light")}</tr>
                    <tr>{getGuardiansOfSchool("Dark")}</tr>
                    <tr>{getGuardiansOfSchool("Basic")}</tr>
                    <tr>{getGuardiansOfSchool("Water")}</tr>
                    <tr>{getGuardiansOfSchool("Earth")}</tr>
                    <tr>{getGuardiansOfSchool("Fire")}</tr>
                </tbody>
            </table>
        </div>
    );
}

export default GuardianList