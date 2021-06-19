import { createContext } from 'react';

export const GuardianContext = createContext({
    guardians: {},
    setGuardians: () => {},
})