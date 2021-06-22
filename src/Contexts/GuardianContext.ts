import { createContext } from 'react';

export interface Character {
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
    party_buff: string,
    img: string
}

const defaultState: Character[] = [];

export const GuardianContext = createContext(defaultState);