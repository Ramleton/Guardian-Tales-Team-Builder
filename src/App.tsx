import GuardianList from "./Components/GuardianList";
import Header from "./Components/Header"
import React from "react";
import Team_Roster from "./Components/Team_Roster";

const App: React.FC = () => {

  const getGuardians = () => {
    const data: [string, any] = require('./guardian_stats.json');
    const guardians: any = Object.entries(data).map(([chrName, character]) => {
      character.name = chrName;
      character.img = `/Images/Character_Portraits/${chrName}.jpg`;
      return character
    });
    return guardians
  }

  return (
      <div className="container">
        <Header text="Guardian Tales Team Builder" />
        {/* <Team_Roster guardians={getGuardians()}/> */}
        <GuardianList guardians={getGuardians()}/>
      </div>
  )
}

export default App;