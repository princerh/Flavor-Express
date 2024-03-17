/* eslint-disable react/prop-types */
import Total from "../Total/Total";

const Currentcook = ({currentlycooking}) => {
    return (
        <div>



<div>
            <h1 className="text-center font-bold text-xl pb-2 border-b">Currently Cooking: {currentlycooking.length}  </h1>
            <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>



    {
        currentlycooking.map((item, index) => {
            // console.log(item) ;
        //    <Show item={item} index={index}></Show>

    return (
        <tr key={index} className="text-black">
        <th>{index+1}</th> 
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time} min</td>
        <td>{item.calories} calories</td>
    </tr> 
    
    )

        })
      }

      <Total currentlycooking={currentlycooking}></Total>

    </tbody>
  </table>
</div>


            
            </div>


          
            
        </div>
    );
};

export default Currentcook;