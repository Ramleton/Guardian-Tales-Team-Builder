import React, { useContext } from 'react'

import { GuardianContext } from '../Contexts/GuardianContext';
import Team from './Team';
import TeamAbilityCombo from './TeamAbilityCombo';
import { TeamContext } from '../Contexts/TeamContext';

interface Props {
    teamMembers: string[]
}

const TeamInfo: React.FC<Props> = ({ teamMembers }) => {

    const guardianData = useContext(GuardianContext);

    const guardians = Object.values(guardianData).filter(guardian => teamMembers.includes(guardian.name));

    return (
        <>
            <TeamContext.Provider value={guardians}>
                <div className="centered-items">
                    <Team />
                </div>
                <div>
                    <TeamAbilityCombo />
                </div>
            </TeamContext.Provider>
        </>
    );
}

export default TeamInfo;