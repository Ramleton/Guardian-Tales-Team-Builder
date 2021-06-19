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
    guardians: Character[];
}

const Team_Roster: React.FC = () => {
    return (
        <div className="roster">
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Team_Roster