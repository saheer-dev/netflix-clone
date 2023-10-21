import React from "react";
import NavBar from "./navBar";
import Ecarousel from "./carousel";
import UsMovies from "./UsMovies";
import Popular from "./Popular";
import English from "./English";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Ecarousel />
      <UsMovies />
      <Popular />
      <English />
    </div>
  );
}
