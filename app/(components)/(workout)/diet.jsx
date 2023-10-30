"use client";
import React, { useState } from "react";

function Diet() {
  const [isVeg, setIsVeg] = useState(true);
  const [dietPlan, setDietPlan] = useState("");
  const [foodItems, setFoodItems] = useState([
    { name: "Spinach Salad", calories: 50, protein: 3, isVeg: true },
    { name: "Grilled Tofu", calories: 150, protein: 12, isVeg: true },
    { name: "Vegetable Stir-Fry", calories: 200, protein: 8, isVeg: true },
    { name: "Quinoa Bowl", calories: 250, protein: 10, isVeg: true },
    { name: "Hummus and Veggies", calories: 100, protein: 5, isVeg: true },
    { name: "Veggie Burger", calories: 300, protein: 15, isVeg: true },
    { name: "Roasted Brussels Sprouts", calories: 70, protein: 4, isVeg: true },
    { name: "Eggplant Parmesan", calories: 350, protein: 18, isVeg: true },
    {
      name: "Spaghetti with Marinara",
      calories: 400,
      protein: 10,
      isVeg: true,
    },
    { name: "Greek Salad", calories: 150, protein: 6, isVeg: true },
    { name: "Grilled Chicken", calories: 250, protein: 25, isVeg: false },
    { name: "Salmon Fillet", calories: 300, protein: 20, isVeg: false },
    { name: "Beef Steak", calories: 400, protein: 30, isVeg: false },
    { name: "Shrimp Scampi", calories: 200, protein: 22, isVeg: false },
    { name: "Pork Chops", calories: 350, protein: 26, isVeg: false },
    { name: "Lamb Kebabs", calories: 300, protein: 24, isVeg: false },
    { name: "Spicy Chicken Wings", calories: 450, protein: 28, isVeg: false },
    { name: "Beef and Broccoli", calories: 350, protein: 20, isVeg: false },
    { name: "Tuna Salad", calories: 250, protein: 22, isVeg: false },
    { name: "Chicken Alfredo", calories: 400, protein: 30, isVeg: false },

    // Add more food items here...
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleDietSelection = (e) => {
    setIsVeg(e.target.value === "veg");
  };

  const generateDiet = () => {
    const selectedFoodItems = foodItems.filter((item) =>
      isVeg ? item.isVeg : !item.isVeg
    );
    setSelectedItems(selectedFoodItems);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Diet Chart</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select your dietary preference:
        </label>
        <select
          onChange={handleDietSelection}
          className="border rounded w-full py-2 px-3"
        >
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>
      </div>
      <button
        onClick={generateDiet}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Generate Diet Plan
      </button>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Your Diet Plan:</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Food Item</th>
              <th className="text-left">Calories</th>
              <th className="text-left">Protein (g)</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
                <td>{item.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Diet;
