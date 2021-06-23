import React, { useContext } from 'react'

import Guardian from './Guardian';
import { TeamContext } from '../Contexts/TeamContext';

export const Team: React.FC = () => {

    const teamMembers = useContext(TeamContext);

    const teamElements: JSX.Element[] = teamMembers.map((guardian, index) => {return (<li className="team-item" key={index}><Guardian character={guardian}/></li>)})

    return (
        <div className="roster">
            <h1 className="party-background centered-text">Selected Team</h1>
            <ul className="centered-items team-list">{teamElements}</ul>
        </div>
    );
}

export default Team;
