import Button from "./Components/Button"
import GuardianList from "./Components/GuardianList";
import Header from "./Components/Header"
import React from "react";
import Team_Roster from "./Components/Team_Roster";

const App: React.FC = () => {
  
  const buttonPressed: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    console.log("Clicked");
  }

  const getGuardians = () => {
    const data: [string, any] = require('./guardian_stats.json');
    const guardians: any = Object.entries(data).map(([chrName, character]) => {
      character.name = chrName;
      character.img = "";
      return character
    });
    // return guardians
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