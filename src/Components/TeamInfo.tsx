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

    return (<>
            {teamMembers.length > 0 && <>
                <TeamContext.Provider value={guardians}>
                    <div className="row centered-items unselectable">
                        <Team />
                        <TeamStats />
                    </div>
                    <div className="border">
                        <TeamAbilityCombo />
                        
                    </div>
                </TeamContext.Provider>
            </>}
        </>
    );
}

export default TeamInfo;