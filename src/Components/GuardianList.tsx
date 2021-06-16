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
    return (
        <div className="list">
            <table>
                <tbody>
                    <tr>
                        {guardians.map((guardian, index) => {
                           return (<td key={index}><Guardian guardian={guardian}/></td>) 
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GuardianList