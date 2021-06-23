import React, { useContext } from 'react'

import { GuardianContext } from '../Contexts/GuardianContext';
import Team from './Team';
import TeamAbilityCombo from './TeamAbilityCombo';
import { TeamContext } from '../Contexts/TeamContext';
import TeamStats from './TeamStats';

interface Props {
    teamMembers: string[]
}

const TeamInfo: React.FC<Props> = ({ teamMembers }) => {

    const guardianData = useContext(GuardianContext);

    const guardians = Object.values(guardianData).filter(guardian => teamMembers.includes(guardian.name));

    return (
        <div className="roster-background">
            <TeamContext.Provider value={guardians}>
                <div className="centered-items">
                    <Team />
                </div>
                <div className="row">
                    <TeamAbilityCombo />
                    <TeamStats />
                </div>
            </TeamContext.Provider>
        </div>
    );
}

export default TeamInfo;