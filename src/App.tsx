import { Character, GuardianContext } from "./Contexts/GuardianContext";
import React, { useState } from "react";

import GuardianList from "./Components/GuardianList";
import TeamInfo from "./Components/TeamInfo";

const App: React.FC = () => {

  const [builtTeam, setbuiltTeam]: [string[], CallableFunction] = useState([]);

  const getGuardianData = () => {
    const data: Character = require('./guardian_stats.json');
    return Object.entries(data).map(([chrName, character]) => {
      character.name = chrName;
      character.img = `/Images/Character_Portraits/${chrName.replace("/", "")}.jpg`;
      return character;
    });
  }

  return (
      <div className="dark-background container">
        <GuardianContext.Provider value={getGuardianData()}>
          <GuardianList buildTeam={setbuiltTeam}/>
          <TeamInfo teamMembers={builtTeam}/>
        </GuardianContext.Provider>
      </div>
  )
}

export default App;