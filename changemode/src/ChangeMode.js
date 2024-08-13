import { useState } from "react";
 function ChangeMode()
 {

    const [bgColor,setBgColor]=useState("grey");
    const changeMode =() => {setBgColor(bgColor==="grey"?"white" : "grey");} ;
    return(<div style={{backgroundColor:bgColor, padding:200}}>
        <h3>Change Mode</h3>
      
        <button onClick={changeMode}>Change Mode</button>
    </div>)
 }
 export default ChangeMode;