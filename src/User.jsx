import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className=" w-1/2 m-auto mt-10">
      <h1 className="text-4xl text-red-200 mb-2">User</h1>

      <div className="flex w-1/2 flex-col mt-3">
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/john"
        >
          John
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/ayush"
        >
          Ayush
        </Link>
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300"
          to="/user/anubhav"
        >
          Anubhav
        </Link>
      </div>

      <hr />
      <Outlet/>
    </div>
    
    

  );
}

export default User;
