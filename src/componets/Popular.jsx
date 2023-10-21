import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";


export default function UsMovies() {

  const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const [popular, setpopular] = useState([]);
  useEffect(() => {
    axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        setpopular(res.data.results);
      });
  }, []);

  return (
    
    <div className=" w-screen p-4  bg-black -mt-[5rem] mb-[2rem]">
        <div className="flex justify-between items-center">
       
      <h1 className=" text-slate-300 mb-4 z-40">Popular on Netflix</h1>



      </div>
  
      <Carousel
      arrows={false}
   
        responsive={responsive}
      >
        {popular.map((pop) => (
          <div className="relative h-[12rem] shadow-md ">
            <img 
              className="aspect-[1.8/2] h-[95%] object-fill overflow-hidden  absolute inset-0 " 
              src={`https://image.tmdb.org/t/p/original/${pop.poster_path}`} />
          </div>
        ))}
      </Carousel>
      
    </div>
  );
}
