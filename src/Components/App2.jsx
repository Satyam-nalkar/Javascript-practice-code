import React, { useState } from "react";


function App2(){
const [val, setVal] = useState({name:"",email:""});
const handleSubmit = (event)=>{
  event.preventDefault();
  console.log(val);
}

  return (
   <form action="" onSubmit={handleSubmit}>
     <input onChange={(event)=>setVal({...val, name:event.target.value})} type="text" placeholder="name" />
     <input onChange={(event)=>setVal({...val, email:event.target.value})} type="text" placeholder="email" />
      <input type="submit" />
   </form>
    
     )   
}
   
export default App2;