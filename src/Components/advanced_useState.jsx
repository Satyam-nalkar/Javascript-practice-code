// import React, { useState } from "react";

// function App() {
//   const [val, setVal] = useState({ name: "harsh", age: 24 });

//   return (
//     <div>
//       <button onClick={()=> {setVal({ ...val, gender: "male" });
//       console.log(val)
//     }}>click</button>
//     </div>
//   );
// }
// export default App;

// Addition
// import React, { useState } from "react";

// function App(){
//   const [val,setVal] = useState([1,2,3,4,5,6])
//   return (
//     <div className="p-4">
//        {val.map(item=><h1>{item}</h1>)}
//     <button onClick={()=>setVal([...val,7])} className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white">click</button>
//     </div>
//   )
// }
// export default App;

//Advanced addition
import React, { useState } from "react";
function App() {
  const [val, setVal] = useState([
    { name: "harsh", age: 24 },
    { name: "shivam", age: 25 },
    { name: "kohli", age: 32 },
  ]);
  return (
    <div className="p-4">
      {val.map((item) => (
       <div>
                <h1>{item.name}</h1>
                <h2>{item.age}</h2>
       </div>
      ))}
      <button
        onClick={() => setVal(()=>val.map(item=>item.name === "shivam" ? ({name:"shivam",age:26}) : item ))}
        className="px-3 py-1 bg-blue-500 rounded-full text-xs text-white"
      >
        click
      </button>
    </div>
  );
}
export default App;
