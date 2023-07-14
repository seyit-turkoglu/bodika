import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import categories from "../category.json"
import { useState } from "react";
export default function Category({ changeCategory }) {
  const [activeCategory, setActiveCategory] = useState("");

  const handleClick = (category) => {
    setActiveCategory(category.categoryName);
    changeCategory(category);
  };

  return (
    <>
      <div className=" w-48 text-center ml-8 mr-28 mt-8 ">
        <ListGroup className="border-t-[1px] rounded-xl shadow-xl shadow-gray-500 ">
          {categories.map((category) => (
            <ListGroup.Item
            className={`text-xl border-b-2 py-2 text-center cursor-pointer ${
              activeCategory === category.categoryName ? "bg-blue-500 text-white" : ""
            }`}
            key={category.id}
            onClick={() => handleClick(category)}
          >
            {category.categoryName}
          </ListGroup.Item>
          
          ))}
        </ListGroup>
      </div>
    </>
  );
}
