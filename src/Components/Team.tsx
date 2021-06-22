import React, { useContext } from 'react'

import Guardian from './Guardian';
import { TeamContext } from '../Contexts/TeamContext';

export const Team: React.FC = () => {

    const teamMembers = useContext(TeamContext);

    const teamElements: JSX.Element[] = teamMembers.map((guardian, index) => {return (<li className="team-item" key={index}><Guardian character={guardian}/></li>)})

    return (
        <div className="roster">
            <h1>Selected Team</h1>
            <ul className="team-list">{teamElements}</ul>
        </div>
    );
}

export default Team;
