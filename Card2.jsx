import React from "react";
 
function Card2 ({values,index,handleClick}){
  const {name,profession,image,friends}=values;
    return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-38 bg-sky-200">
        <img className="w-full h-full object-cover object-center" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button onClick={()=>handleClick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${friends ? "bg-green-600": "bg-blue-500" } font-semibold rounded-md`}>{friends === true ? "Friends":"Add friend"  }</button>
      </div>
    </div>
    )
}

export default Card2;  