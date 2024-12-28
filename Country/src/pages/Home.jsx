import { FaLongArrowAltRight } from "react-icons/fa";
export const Home = () =>{
    return(

<main className="hero-section main">
<div className="grid-two-cols grid container">
    <div className="hero-content">
       <h1 className="heading-xl">
              Explore The World, One Country at A Time.
       </h1>
       <p className="paragraph">
           Discover The History, Culture, And Beauty Of Every Nation. Sort,
           Search, And Filter Through Countries To Find Details You Need.
       </p>
       <button className="btn btn-darken btn-inline bg-white-box">
           Start Exploring <FaLongArrowAltRight />
           
       </button>
    </div>
    <div className="hero-image">
        <img src="/image/world.png" alt="world is beuty"  className="banner-image"/>
       </div>
</div>
</main>
    );
};