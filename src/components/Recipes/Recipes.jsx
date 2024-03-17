/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Carts from "../Carts/Carts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {

const [recipes, setRecipes] = useState([])
const [carts, setCarts] = useState([])
const [currentlycooking, setCurrentlycooking] = useState([])

const handleCook = (recipe) => {
   
      const alreadyExist = carts.find(c => c.recipe_id === recipe.recipe_id)
      
      if(!alreadyExist){
        const newCarts = [...carts, recipe];
        // console.log(newCarts);
        setCarts(newCarts);
        toast.success("Food Item Added")
      }
      else{
        toast.warn("Item Already Added")
      }
    }


const handleCurrent = (item, id) => {
        const newCurrentlycooking = [...currentlycooking, item]
        setCurrentlycooking(newCurrentlycooking)
toast.info("Preparing Food")
     

        const remainingCart = carts.filter(cart => cart.recipe_id !== id)
        // console.log(remainingCart);
        setCarts(remainingCart)



    }




useEffect(() => {
    fetch('Recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
}, [])






    return (
        <div className="text-center my-10 space-y-5">
            <h2 className="text-2xl font-bold text-[#150B2B ]">Our Recipes</h2>
            <p className="text-[#150B2B] text-xs font-normal px-4 lg:px-32">From mouthwatering appetizers to decadent desserts, our diverse selection caters to every palate and occasion. Whether you're seeking quick and easy weeknight meals or gourmet delights for special gatherings, our recipes are crafted with love and precision to inspire your culinary adventures.</p>

            <div className="grid grid-cols-12 gap-5">
  <div className="col-span-12 lg:col-span-7">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {
        recipes.map(recipe => <Recipe key={recipe.id} handleCook={handleCook} recipe={recipe}></Recipe>)
      }
    </div>
  </div>

  <div className="col-span-12 lg:col-span-5">
    <Carts carts={carts} handleCurrent={handleCurrent} currentlycooking={currentlycooking}></Carts>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Recipes;