import React from "react";
import Desk from "./Desk.js";
import Mob from "./Mob.js";

export default App;
function App() {
  return (
    <div className='MainPage bg-[#16151D]'>
      <div className='md:flex flex-col hidden '>
        <Desk />
      </div>
      <div className='md:hidden'>
        <Mob />
      </div>
    </div>
  );
}
