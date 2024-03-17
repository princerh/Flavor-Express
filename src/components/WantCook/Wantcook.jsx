/* eslint-disable react/prop-types */

const Wantcook = ({carts, handleCurrent}) => {
    return (
        <div>
            
           <div>
            <h1 className="text-center font-bold text-xl pb-2 border-b">Want to Cook: {carts.length} </h1>
            <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="font-bold">
        <th className="hidden lg:flex"></th>
        <th>Name</th>
        <th className="pl-0">Time</th>
        <th className="pl-0">Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {
        carts.map((item, index) => {
            // console.log(item) ;
        //    <Show item={item} index={index}></Show>

    return (
        <tr key={index} >
        <th className="hidden lg:flex">{index+1}</th> 
        <td>{item.recipe_name}</td>
        <td className="pl-0">{item.preparing_time} min</td>
        <td className="pl-0">{item.calories} calories</td>
        <td onClick={() => handleCurrent(item, item.recipe_id)} className="btn bg-green-400 rounded-xl mt-2">Preparing</td>
    </tr> 
    )

        })
      }

    </tbody>
  </table>
</div>


            
            </div>



        </div>
    );
};

export default Wantcook;