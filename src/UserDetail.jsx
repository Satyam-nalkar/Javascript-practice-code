import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function UserDetail() {
 const {name} = useParams()
 const navigate = useNavigate()
 const GoBackHandler =() =>{
  // navigate("/user");
  navigate(-1);
 }
  return (
    <div className="mt-10">
      <h1 className="text-red-200 mb-2">User Detail</h1>

      <h1 className="text-3xl mt-3 ">hiii!,{name}</h1>
      <button onClick={GoBackHandler} className="mt-5 text-white px-3 py-2 bg-red-400">Go back</button>
    </div>
  );
}
export default UserDetail;
