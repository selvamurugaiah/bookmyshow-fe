import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const RecommendedMoviesCard = () => {
  const Collection = [
    {
      name: "PS-2",
      img: "https://th.bing.com/th/id/OIP.xOUgcOnGyOPtsCpBbh_IDgHaI9?w=136&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      language:"Tamil,Telungu,Malayalam"
    },
    {
      name: "Vaathi",
      img: "https://th.bing.com/th/id/OIP.U5q7HFNPeTkkPbps5JBEHwHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      language:"Tamil,Telungu,Malayalam"
    },
    {
      name: "Thunivu",
      img: "https://th.bing.com/th/id/OIP.o4Dcc66AW0VkM_c6Hdb4FgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
      language:"Tamil,Telungu,Malayalam"
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      
    <div className="recommendedMovies">
      
      {Collection.map((col, i) => {
        return (
          <MovieCard
            name={col.name}
            img={col.img}
            language={col.language}
          />
        );
      })}
    </div>
    </div>
  );
};

export default RecommendedMoviesCard;
