import react, { useState } from "react";
import "./styles.css";
const button = ["COMEDY", "HORROR", "ACTION"];
const movie = {
  COMEDY: {
    movieList: ["Gol-mal", "Dhammal", "Dhol"],
    rating: ["5/5", "4.5/5", "4/5"]
  },

  HORROR: {
    movieList: ["BHOOT", "STREE", "HAUNTED"],
    rating: ["4/5", "3/5", "4/5"]
  },

  ACTION: {
    movieList: ["BAHUBALI", "SAHO", "RA-ONE"],
    rating: ["5/5", "4.5/5", "4/5"]
  }
};

export default function App() {
  const [movieName, setmovieName] = useState("COMEDY");

  return (
    <div className="App">
      <h1>
        movie<span style={{ color: "red" }}> recommandation</span>
      </h1>

      <p style={{ padding: "0.5rem 0rem" }}>
        Checkout my favorite movie with rating.
        <br />
        Select a genre to get started.{" "}
      </p>
      <hr />

      <div>
        {button.map((item, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => setmovieName(item)}
            >
              {item}
            </button>
          );
        })}
        <ul className="uList">
          {movie[movieName].movieList.map((item, index) => {
            return (
              <li key={index} className="list">
                {item}
                <span className="rating">{movie[movieName].rating[index]}</span>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
