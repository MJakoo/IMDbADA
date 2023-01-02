import React from "react";
import './pageMovie.css';
// import { useParams } from "react-router";
// import data from "./recources/imdb_top_1000.json"

export default function PageMovie() {

    
    return (
            <div className="Movie">
                <img src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg" alt="Movie Poster" />
                <p className="movieTitle">1. The Shawshank Redemption (1994)</p>
                <p className="rating">IMDb: 9.3  Meta Score: 80%</p>
              </div>
      );
}