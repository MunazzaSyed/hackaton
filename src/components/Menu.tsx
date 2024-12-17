import Image from "next/image";
import React from "react";

function Menu() {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <div className="text-center py-6">
        <p className="font-semibold text-orange-500">Choice & Pick</p>
        <h1 className="text-4xl font-semibold">
          <span className="text-orange-500">Fr</span>om Our Menu
        </h1>
      </div>

      {/* Category Navigation */}
      <div className="flex justify-center gap-8 font-extrabold py-6 text-lg">
        <div className="text-orange-500 cursor-pointer">Breakfast</div>
        <div className="cursor-pointer">Lunch</div>
        <div className="cursor-pointer">Dinner</div>
        <div className="cursor-pointer">Dessert</div>
        <div className="cursor-pointer">Drink</div>
        <div className="cursor-pointer">Snack</div>
        <div className="cursor-pointer">Soups</div>
      </div>

      {/* Menu Items */}
      <div className="flex justify-center gap-16 px-8">
        {/* Left Side Image */}
        <div className="flex-shrink-0">
          <Image
            src="/new.png" // Replace with your main image path
            alt="Main Menu Image"
            width={336}
            height={362}
            className="rounded-lg"
          />
        </div>

        {/* Right Side Menu List */}
        <div className="grid grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg"
            >
              {/* Placeholder for Food Image */}
              <Image
                src="/foods.png" // Replace with actual food images
                alt={item.name}
                width={80}
                height={80}
             className="rounded-md"
                      
                  />
     
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
                <p className="text-orange-500 font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  {
    name: "Lettuce Leaf",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "12.55",
  },
  {
    name: "Fresh Breakfast",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "14.55",
  },
  {
    name: "Mild Butter",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "12.55",
  },
  {
    name: "Fresh Bread",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "12.55",
  },
  {
    name: "Glow Cheese",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "12.55",
  },
  {
    name: "Italian Pizza",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "14.55",
  },
  {
    name: "Slice Beef",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "12.55",
  },
  {
    name: "Mushroom Pizza",
    description: "Lacus nisi et ac dapibus velit in consequat.",
    price: "12.55",
  },
];

export default Menu;