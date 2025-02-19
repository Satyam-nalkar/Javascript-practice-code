import { useForm } from "react-hook-form";
import { useState } from "react";

function Admin() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "password") {
      alert("Login Successful!");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="bg-zinc-200 bg-cover flex items-center justify-center h-screen">
      <div className="bg-white w-170 p-6 shadow-lg border rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <input type="text" className="w-full border rounded p-2" {...register("username", { required: true })} />
            {errors.username && <p className="text-red-500 text-sm">Username is required</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input type="password" className="w-full border rounded p-2" {...register("password", { required: true })} />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
          <button type="submit" className="w-full bg-blue-400 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
 export default Admin;