import Button from "./Components/Button"
import Header from "./Components/Header"
import React from "react";

const App: React.FC = () => {
  
  const buttonPressed: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    console.log("Clicked")
  }

  return (
    <div className="container">
      <Header text="Guardian Tales Team Builder" />
    </div>
  )
}

export default App;