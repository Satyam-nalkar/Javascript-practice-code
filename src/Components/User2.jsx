import { useState } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const [ingredients, setIngredients] = useState([""]);
  const navigate = useNavigate();

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  const handleClear = () => {
    setIngredients([""]);
    document.getElementById("recipe-form").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 p-4">
      <div className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h3 className="text-center text-2xl font-bold mb-4">YOUR RECIPE DETAILS</h3>
        <form id="recipe-form" onSubmit={handleSubmit}>
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
            {ingredients.map((ingredient, index) => (
              <input key={index} type="text" placeholder="Enter ingredient" className="w-full p-2 border rounded mb-2" />
            ))}
            <button type="button" onClick={addIngredient} className="bg-zinc-200 text-black px-3 py-1 rounded">Add More</button>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <input type="text" placeholder="Recipe description" className="w-full p-4 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Pictures</label>
            <input type="file" className="w-full p-2 border rounded" />
          </div>
          {/* Footer Buttons */}
          <div className="flex items-center justify-center gap-7 mt-4">
            <button type="button" onClick={handleBack} className="bg-blue-400 text-white px-4 py-2 rounded">Back</button>
            <button type="button" onClick={handleClear} className="bg-blue-400 text-white px-4 py-2 rounded">Clear</button>
            <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
