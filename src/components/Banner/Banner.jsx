/* eslint-disable react/no-unescaped-entities */
import chef from "/assets/chef.jpg";

const Banner = () => {

 const handleFeedback = () => {
document.getElementById("feedback").classList.toggle("bg-transparent")
document.getElementById("feedback").classList.toggle("bg-green-400")
document.getElementById("explore").classList.toggle("bg-green-400")
document.getElementById("explore").classList.toggle("bg-transparent")
// document.getElementById("explore").classList.add("bg-transparent")
 }

 const handleExplore = () => {
    document.getElementById("explore").classList.toggle("bg-green-400")
    document.getElementById("explore").classList.toggle("bg-transparent")
    document.getElementById("feedback").classList.toggle("bg-green-400")
    document.getElementById("feedback").classList.toggle("bg-transparent")
    // document.getElementById("explore").classList.add("bg-transparent")
     }




    return (
        <div className="flex flex-col justify-center items-center text-center bg-center bg-no-repeat h-[450px] rounded-3xl space-y-12 mt-4 lg:mt-0 lg:space-y-8"
             style={{
                 backgroundImage: `linear-gradient(360deg, rgba(3,7,18,0.6), rgba(3,7,18,0)), url(${chef})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}>
            {/* Content of the banner */}

            <div className="space-y-6">
                <h2 className="font-bold text-2xl lg:text-4xl text-white px-4 lg:px-36">Discover an exceptional cooking class tailored for you!</h2>
                <p className="text-white font-normal text-xs px-4 lg:px-28">Our exceptional cooking classes are expertly tailored to suit your taste. Whether you're a novice in the kitchen or a seasoned chef, we'll guide you through the art of cooking with passion and flair. </p>
                <div className="flex gap-5 justify-center">
                    <button id="explore" onClick={handleExplore} className="btn rounded-2xl p-4 bg-green-400  font-bold text-white">Explore Now</button>
                    <button id="feedback" onClick={handleFeedback} className="btn rounded-2xl p-4  bg-transparent text-white hover:text-red-600">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
