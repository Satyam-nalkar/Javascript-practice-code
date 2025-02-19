import React, { useState } from "react";
import Card3 from "./Components/Card3";
import Navbar from "./Components/Navbar";
function App(){
const data = [
  {image:"https://images.unsplash.com/photo-1528728935509-22fb14722a30?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Challenger",artist:"Harsh",added:false},
  {image:"https://media.istockphoto.com/id/1058251118/photo/abstract-musical-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=WIXHmTIOvwQjUUmJvpdPAi2QjuLpfXFGnmIJjRP-D3Q=",name:"One day",artist:"Hitesh",added:false}, 
  {image:"https://media.istockphoto.com/id/472309469/vector/nocturn.jpg?s=612x612&w=0&k=20&c=TGQY59Ed3a8m7eybmQielRbgAF2keeMoGz2dq6CyuxQ=",name:"One love",artist:"Shubh",added:false}, 
  {image:"https://media.istockphoto.com/id/1495124711/vector/multicolor-music-notes-banner.jpg?s=612x612&w=0&k=20&c=M4rOv3Nx_KlzoS2Lon3GZ4h6h-BE_9Mla4YGBDBCIR0=",name:"Together",artist:"Shrishti",added:false}, 

]
    
  const [songData, setSongData] = useState(data);
  const handleClick=(index)=>{
    setSongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === index)
          return{...item,added:!item.added};
        return item;
      })
    })
  }

  return (
    <> 
   <div className="w-full h-screen bg-zinc-300 ">
    <Navbar data={songData}/>
    <div className="px-20 flex gap-10 mt-10 flex-wrap">
    {songData.map((obj,index)=>(
       <Card3 data={obj} handleClick={handleClick} index={index} key={index}/>
    ))} 



     
    </div>
   </div>
   </>

  )
}
export default App;