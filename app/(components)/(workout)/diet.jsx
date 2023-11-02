"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 mx-5 ml-5 bg-c1 shadow-md rounded"
    >
      <div className="flex justify-center">
        <h1 className="text-2xl mb-4 text-c4 font-semibold">Diet Chart</h1>
      </div>
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2 justify-center flex">
          Select your dietary preference
        </label>

        <div className="flex justify-center">
          <select
            onChange={handleDietSelection}
            className="border rounded w-full py-2 px-3 max-w-md bg-white text-black border-gray-300 focus:ring focus:ring-t3 focus:outline-none"
          >
            <option value="veg" className="py-2">
              Vegetarian
            </option>
            <option value="non-veg" className="py-2">
              Non-Vegetarian
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={generateDiet}
          className="hover:bg-t4 text-white font-bold py-2 px-4 hover:text-c4 hover:outline-double rounded-2xl focus:outline-none focus:shadow-outline bg-c5"
        >
          Generate Diet Plan
        </button>
      </div>
      <div className="mt-4 flex justify-center">
        <table className="w-full bg-t3 mr-14 ml-14">
          <thead>
            <tr className="text-c3">
              <th className="text-left pl-10">Food Item</th>
              <th className="text-left">Calories</th>
              <th className="text-left">Protein (g)</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <tr key={index}>
                <td className="pl-10">{item.name}</td>
                <td>{item.calories}</td>
                <td>{item.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default Diet;
