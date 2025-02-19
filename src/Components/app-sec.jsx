// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// function Card2(){

//   const [val,setVal] = useState(false);;
//     return (
//         <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
//              <div className="relative w-60 h-32  rounded-md flex overflow-hidden">
//                 <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]" } w-full h-full object-cover`} src="https://images.unsplash.com/photo-1736761695540-c6ef1c5be30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
//                 <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]" } w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1676218969835-0d0e89a12bc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8" alt="" />
//              <span onClick={()=>setVal(()=>!val)} className="w-8 h-8 flex items-center justify-center bg-[#dadada7b] rounded-full bg-zinc-200 absolute bottom-[2%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
//              <FaArrowRight size={"0.7em"} />
//              </span>
//              </div>
//         </div>
//     )
// }
// export default Card2


//props
import React, { useState } from "react";
import Card2 from "./Components/Card2";
function App() {
  const raw = [
    {name:"John", profession:"Painter",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",friends:false},
    {name:"Amit", profession:"Artist",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
    {name:"Rahul", profession:"Singer",image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww",friends:false},
    {name:"Sumit", profession:"Coder",image:"https://media.istockphoto.com/id/2148419703/photo/portrait-of-a-young-indian-man-in-glasses-and-a-white-shirt-standing-near-an-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ov-4immlwIJdFndC0NYpPwhIHL85itRXnbWdwnIKe8k=",friends:false},
 
  ];
 
 const[data,setData] = useState(raw);
const handleClick = (changingIndex)=> {
setData((prev)=>{
 return prev.map((item,index)=>{
  if(index===changingIndex) return {...item, friends:!item.friends};
    return item;
 })
})  
}
  return (
  <>
  <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
   {data.map((item,index)=>( 
    <Card2 key={index} index={index} handleClick={handleClick} values={item}/>
   ))}
  </div>
  </> 
  )
} 
export default App;