
import Currentcook from "../Currentcook/Currentcook";
import Wantcook from "../WantCook/Wantcook";


// eslint-disable-next-line react/prop-types
const Carts = ({carts, handleCurrent, currentlycooking}) => {
    
    // console.log(carts)
    return (
        <div className="space-y-8">
            <Wantcook carts={carts} handleCurrent={handleCurrent}></Wantcook>
            <Currentcook currentlycooking={currentlycooking}></Currentcook>
            
        </div>
    );
};

export default Carts;