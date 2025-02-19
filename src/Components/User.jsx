import { useState } from "react";

function User() {
  const [ingredients, setIngredients] = useState([""]);
  const [image, setImage] = useState(null);

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      {/* Navbar */}
      <nav className="flex flex-col items-start bg-white shadow-md p-4">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <div className=" flex items-center gap-2">
            <img className="w-20 h-20" src="https://imgs.search.brave.com/h4eZqHO0NUYV2xHHaGPiRIP-7W7k9qiCxDJjjUr_B2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzcxLzk2LzM4/LzM2MF9GXzE3MTk2/MzgzMF9kYWdxUHBX/cVphZ2pnNkpTYlFh/YW9PT0h5TlI2R2lW/ay5qcGc" alt="logo" />
            <h1 className="text-xl font-bold">Home Chef Hub</h1>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 absolute top-4 right-4">Logout</button>
        </div>
        <div className="flex items-start gap-6 mt-2">
          <a href="#home" className="text-gray-700 hover:text-black">Home</a>
          <a href="#recipe" className="text-gray-700 hover:text-black">Recipe</a>
          <a href="#about" className="text-gray-700 hover:text-black">About</a>
          <a href="#contact" className="text-gray-700 hover:text-black">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow p-4">
        <div className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h3 className="text-center text-2xl font-bold mb-4">YOUR RECIPE DETAILS</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-1">Recipe Title</label>
              <input type="text" placeholder="Enter recipe title" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Recipe Preparation Time (in minutes)</label>
              <input type="number" placeholder="Enter preparation time" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Recipe Cook Time (in minutes)</label>
              <input type="number" placeholder="Enter cook time" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Recipe Ingredients</label>
              {ingredients.map((_, index) => (
                <input key={index} type="text" placeholder="Enter ingredient" className="w-full p-2 border rounded mb-2" />
              ))}
              <button type="button" onClick={addIngredient} className="bg-zinc-200 text-black px-3 py-1 rounded">Add More</button>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Description</label>
              <input type="text" placeholder="Recipe description" className="w-full p-4 border rounded" />
            </div>

            {/* Image Upload and Preview */}
            <div className="mb-4">
              <label className="block mb-1">Pictures</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
              {image && <img src={image} alt="Selected" className="mt-3 w-full h-48 object-cover rounded" />}
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-center gap-7 mt-4">
              <button type="button" className="bg-blue-400 text-white px-4 py-2 rounded">Back</button>
              <button type="reset" className="bg-blue-400 text-white px-4 py-2 rounded">Clear</button>
              <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
