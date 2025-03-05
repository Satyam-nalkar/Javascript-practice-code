// import React, { useState } from "react";
// import Card from "./Components/Card";
// function App(){
//  const [banned,setBanned] = useState(false);
//   return(
//    <div className="p-4">
//     <h1>{banned.toString()}</h1>
//     <button onClick={()=>setBanned(!banned)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white">Ban karo</button>
//     </div>
//    );
// }
// export default App;

import React, { useState } from "react";

function App() {
  const [val, setVal] = useState({ name: "harsh", isBanned: false });

  return (
    <div className="p-4">
      <h1>name:{val.name}</h1>
      <h2>banned:{val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`px-3 py-1 ${
          val.isBanned ? "bg-blue-500" : "bg-red-500"
        } rounded-full text-xs text-white`}
      >
        change
      </button>
    </div>
  );
}
export default App;
