import { Character } from "./GuardianContext";
import { createContext } from "react";

const defaultState: Character[] = [];

export const TeamContext = createContext(defaultState);