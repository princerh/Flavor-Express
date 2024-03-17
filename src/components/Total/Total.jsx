/* eslint-disable react/prop-types */
const Total = ({currentlycooking}) => {
    return (
        <tr className="text-black">
        <th></th> 
        <td></td>
        <td>Total Time = {currentlycooking.reduce((p,c) => p + c.preparing_time, 0)} min</td>
        <td>Total Calories = {currentlycooking.reduce((p,c) => p + c.calories, 0)} calories</td>
    </tr> 
    );
};

export default Total;