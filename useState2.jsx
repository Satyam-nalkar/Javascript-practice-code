import React, { useState } from "react";

function App(){
  const[val,setVal]= useState(false);

  return (
    <div>
   <h1>
    {val===false ? "BAHAR JAAO" : "MAT JAAO"}
   </h1>
   <button onClick={()=>setVal(()=>!val)} className="px-2 py-1 bg-blue-300">Change</button>
    </div>
  )
}
export default App;
