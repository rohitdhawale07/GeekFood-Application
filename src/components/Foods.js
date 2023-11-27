// Food.js

import React from "react";

const Foods = () => {
  const foodItems = [
    {
      id: 1,
      name: "Pizza Margherita",
      description:
        "Classic Margherita pizza with tomato, mozzarella, and basil.",
      image:
        "http://t3.gstatic.com/images?q=tbn:ANd9GcSJRzQOE3wKgsnyIfuNzUBGs5zjKkiOF0OCYoW1OBTKdrAJdCqHVle2dUxpcctfmaeMu7ftWkrQCYetpt5YDwBjQqMpUL0fK7PvNo1qGg",
    },
    {
      id: 2,
      name: "Spaghetti Bolognese",
      description: "Spaghetti pasta with savory Bolognese meat sauce.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg?quality=90&webp=true&resize=300,272",
    },
    {
      id: 3,
      name: "Sushi Platter",
      description: "Assorted sushi rolls and sashimi on a platter.",
      image:
        "https://sushisushi.com/wp-content/uploads/2019/09/Sushi-Platter-Sushi-Catering-1024x1024.jpg",
    },
    {
      id: 1,
      name: "Pizza Margherita",
      description:
        "Classic Margherita pizza with tomato, mozzarella, and basil.",
      image:
        "http://t3.gstatic.com/images?q=tbn:ANd9GcSJRzQOE3wKgsnyIfuNzUBGs5zjKkiOF0OCYoW1OBTKdrAJdCqHVle2dUxpcctfmaeMu7ftWkrQCYetpt5YDwBjQqMpUL0fK7PvNo1qGg",
    },
    {
      id: 2,
      name: "Spaghetti Bolognese",
      description: "Spaghetti pasta with savory Bolognese meat sauce.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/the-best-spaghetti-bolognese-7e83155.jpg?quality=90&webp=true&resize=300,272",
    },
    {
      id: 3,
      name: "Sushi Platter",
      description: "Assorted sushi rolls and sashimi on a platter.",
      image:
        "https://sushisushi.com/wp-content/uploads/2019/09/Sushi-Platter-Sushi-Catering-1024x1024.jpg",
    },
    // Add more food items as needed
  ];

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-4xl font-bold mb-6">Food Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-md shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
