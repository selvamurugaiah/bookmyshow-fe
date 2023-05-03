import React from "react";
import ControlledCarousel from "../Carousel";
import Footer from "../Footer";
import RecommendedMoviesCard from "../RecommendedCard";

const Home = () => {
  return (
    <div>
      <ControlledCarousel />
      <div className="rec_col" style={{color:"black"}}>
        <h1>Recommended Movies: </h1>
        <RecommendedMoviesCard/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
