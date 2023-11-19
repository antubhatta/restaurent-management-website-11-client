import { useEffect } from "react";
import { useState } from "react";
import TopFoodCard from "./TopFoodCard";


const TopFood = () => {
    const [food,setFood]=useState([])
    useEffect(()=>{
        fetch('food.json')
        .then(res=>res.json())
        .then(data=>setFood(data))
    },[])
   
    
    return (
        <div className="mt-20 container mx-auto">
            <h3 className="text-4xl font-bold text-center mb-10">Top Selling Food</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-20">
                {
                    food.map((foods)=><TopFoodCard key={foods.id} food={foods}></TopFoodCard>)
                }
            </div>
        </div>
    );
};

export default TopFood;