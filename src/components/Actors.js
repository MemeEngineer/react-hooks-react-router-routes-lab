import React from "react";
import { actors } from "../data";

function Actors() {
  return(
    <div>
     <h1> Actors Page</h1>
     {actors.map((actor)=> (
       <div key={actor.name}>
<h2>Name:{actor.name}</h2>

<p>Movies: </p>
<ul>{actor.movies.map((movie)=> 
  <li key={movie}>{movie}</li>
  )}
  </ul> 
       </div>
     ))}
     </div>
  ) 
}

export default Actors;


// const actors = [
//   {
//     name: "Benedict Cumberbatch",
//     movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
//   },
//   {
//     name: "Justin Timberlake",
//     movies: ["Trolls", "Friends with Benefits", "The Social Network"],
//   },
//   {
//     name: "Anna Kendrick",
//     movies: ["Pitch Perfect", "Into The Wood"],
//   },
//   {
//     name: "Tom Cruise",
//     movies: [
//       "Jack Reacher: Never Go Back",
//       "Mission Impossible 4",
//       "War of the Worlds",
//     ],
//   },
// ];