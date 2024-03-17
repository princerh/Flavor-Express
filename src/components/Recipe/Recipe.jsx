/* eslint-disable react/prop-types */

import { MdOutlineWatchLater } from "react-icons/md";
import { GiFireBowl } from "react-icons/gi";

const Recipe = ({recipe, handleCook}) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe


    return (
        <div>


<div className="card card-compact  bg-base-100 shadow-xl p-2">
  <figure><img className='rounded-xl h-[200px] w-full' src={recipe_image} alt="Shoes" /></figure>
  <div className="p-3 space-y-2">
    <h2 className="text-[#282828] font-semibold text-[24px]">{recipe_name}</h2>
    <p className='text-[#878787] text-xs font-normal'>{short_description}</p>
    <div className="divider"></div>
    <div className='text-left'>
        <h3 className='text-[#282828] text-[20px] font-bold'>Ingradients: {ingredients.length}</h3>

        <div className="mt-2 ml-2">
        {
            ingredients.map((ingradient, idx) => <li key={idx} className='text=[#878787] font-normal text-xs'>{ingradient}</li>)
        }
        </div>
    </div>
    <div className="divider"></div>

    <div className='flex justify-between'>
        <p className='flex items-center gap-2'><MdOutlineWatchLater />
{preparing_time} min</p>
<p className='flex items-center gap-2'><GiFireBowl />
{calories} calories</p>
    </div>
    <div className="card-actions mt-3">
      <button onClick={() => handleCook(recipe)} className="btn bg-green-400 rounded-2xl">Want to Cook</button>
    </div>
  </div>
</div>



        </div>
    );
};

export default Recipe;