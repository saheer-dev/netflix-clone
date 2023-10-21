import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { ArrowClockwise, Play, Plus } from "@phosphor-icons/react";



export default function Ecarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [trend, settrend] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=efb536b72f026a1ee09ebca3b1a7abff"
      )
      .then((res) => {
        console.log(res.data.results);
        settrend(res.data.results);
      });
  }, []);

  return (
    <div className="flex">

     
      <Carousel
        className="w-[100vw] overflow-hidden "
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={1000}
        customTransition={"transform 3000ms ease-in-out"}
        transitionDuration={3000}
        arrows={false}
      >
        {trend.map((tre) => (
          <div className=" relative aspect-[2/1] w-[100vw] mx-auto rounded-2xl overflow-hidden shadow-xl shadow-[#f6f7ff3c]">
            <img
              className="absolute inset-0 w-full h-full object-cover   "
              src={`https://image.tmdb.org/t/p/original/${tre.backdrop_path}`}
            />
            <div className="hidden md:block">
            <div className=" absolute inset-0  pl-16 flex flex-col items-start justify-center bg-gradient-to-r from-black via-transparent gap-14 ">
                <div className="w-full flex justify-between items-end">
                <div className="">
                <h1 className="text-slate-300 text-4xl block">{tre.original_title}</h1>
              <div className="w-[60vh] mt-16">
                <div className="flex gap-5 ">
                    <button className="w-32 h-10 font-bold text-slate-300 bg-white/10 flex p-2 gap-2 items-center justify-center " > <Play size={22} color="#fcfcfc" weight="fill" /> Play</button>
                    <button className="w-32 h-10 font-bold text-slate-300 bg-white/10 flex p-2 gap-2 items-center justify-center " > <Plus size={22} color="#fcfcfc" weight="bold" /> My List</button>
                </div>
              <p className="text-slate-300 text-base mt-5">{tre.overview}</p>
              </div>
                </div>

              <div className="flex gap-3 justify-center items-center">
                <p className="border rounded-full p-2"><ArrowClockwise size={20} color="#fcfcfc" weight="bold" /></p>
                <p className="text-slate-300 bg-white/10 border-l-4 border-white w-32 h-8 justify-start pl-3 items-center flex">UA/13+</p>
              </div>
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
