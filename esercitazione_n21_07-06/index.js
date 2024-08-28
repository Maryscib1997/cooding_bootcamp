import { renderList } from "./renderCard.js";

const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
const buttonPage = document.querySelector(".button-page");
const categoryBtnContainer = document.querySelector(".category-container");

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNmZTM0YmM0N2RiYTUyMGZlNTYxMDk1ZGU5MTUzYSIsInN1YiI6IjY2NjMxNjJkNDcyNTA2ZTRjMjE0ZmQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eaff1Qa3Q6Y2CSw6O3J4ZvnyF5tEqCEEst96ZWwIPmk";

// Opzioni della richiesta
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

// Prima chiamata API
fetch('https://api.themoviedb.org/3/movie/popular', options)
  .then((response) => response.json())
  .then((data) => {
    renderList(data.results, containerEl);
  })
  .catch((error) => {
    console.error('Errore:', error);
  });

// Seconda chiamata API (se necessaria)
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Errore:', error);
  });

