'use client';
import { foodItems } from "@/utils/data"
import { categories } from "@/utils/data"
import { useState } from "react"
import FoodCard from "./FoodCard";

const MenuSection = () => {
    const [category, setCategory] = useState('all');
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-28">
        <h1 className="text-4xl font-bold text-center mb-10 font-dancing">Our Menu</h1>
        <div className="flex mx-auto w-max text-lg mb-6">
        {
            categories.map((item) => (
                <button onClick={()=> setCategory(item)} key={item} className={`px-8 py-1.5 capitalize rounded-full ${item === category && "bg-primary text-white"}`}> {item} </button>
            ))
        }
        </div>
        <div className="grid grid-cols-3 gap-x-5 gap-y-8">
        {
            foodItems.map((item, index) => (
                category == "all" ?  <FoodCard item={item} key={index} /> : category === item.category && <FoodCard item={item}/>
            ))
        }
        </div>
        <div className="flex justfy-center">
        <button className="btn-primary mx-auto mt-10 px-10">View More</button>
        </div>
    </div>
  )
}

export default MenuSection
