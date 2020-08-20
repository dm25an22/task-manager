import React from "react";
import Main from "./components/main";
import {mockTask} from "./mock"; 

const App = () => {
  return (
    <Main tasks={mockTask}/>
  )
}

export default App;
