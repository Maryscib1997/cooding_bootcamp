import { renderList } from "./renderCard.js";

const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");
const buttonPageNext = document.querySelector(".button-page-next");
const buttonPagePrev = document.querySelector(".button-page-prev");
const categoryBtnContainer = document.querySelector(".category-container");
const genresContainerEl = document.querySelector(".genres-container");

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNmZTM0YmM0N2RiYTUyMGZlNTYxMDk1ZGU5MTUzYSIsInN1YiI6IjY2NjMxNjJkNDcyNTA2ZTRjMjE0ZmQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eaff1Qa3Q6Y2CSw6O3J4ZvnyF5tEqCEEst96ZWwIPmk";
const BASE_URL = 'https://api.themoviedb.org/3';

let currentPage = 1;
let currentCategory = 'movie'; 

// Opzioni della richiesta
const options = {
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
};

const fetchData = async (category, page = 1) => {
  const response = await fetch(`${BASE_URL}/${category}/popular?language=en-US&page=${page}`, options);
  const data = await response.json();
  return data;
};

const updateContent = async (category, page) => {
  try {
    const data = await fetchData(category, page);
    renderList(data.results, containerEl);
  } catch (error) {
    console.error('Errore:', error);
  }
};

categoryBtnContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('category-button')) {
    currentCategory = event.target.dataset.category;
    currentPage = 1; // Reset to first page when category changes
    updateContent(currentCategory, currentPage);
  }
});

buttonPageNext.addEventListener('click', () => {
  currentPage++;
  updateContent(currentCategory, currentPage);
});

buttonPagePrev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateContent(currentCategory, currentPage);
  }
});

// Initial content load
updateContent(currentCategory, currentPage);

// Funzione per inviare i dati alla API (GET)
export const GET = async (endpoint, page = 1) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}?page=${page}&include_adult=false`,
    options
  );

  const data = await response.json();

  console.log("log di get", {
    page: data.page,
    endpoint,
  });

  return data;
};

const renderGenreList = async () => {
  try {
    const genreListElement = document.createElement('ul');
    const genreListResponse = await GET('/genre/movie/list');
    
    // Debug: Verifica la risposta della API
    console.log('Genre List Response:', genreListResponse);
    
    if (genreListResponse && genreListResponse.genres) {
      genreListResponse.genres.forEach(genre => {
        const liEl = document.createElement('li');
        liEl.id = genre.id;
        liEl.textContent = genre.name;
        genreListElement.append(liEl);
      });
    } else {
      console.error('Nessun genere trovato nella risposta:', genreListResponse);
    }

    genresContainerEl.append(genreListElement);
  } catch (error) {
    console.error('Errore nel rendering della lista dei generi:', error);
  }
};

renderGenreList();

genresContainerEl.addEventListener('click', e => {
  const tagName = e.target.tagName;
  const id = Number(e.target.id);

  if (tagName === 'LI') {
    console.log('ID del genere selezionato:', id);
    currentPage = 1;

    updateContent(`discover/${currentCategory}`, `with_genres=${id}`);
  }
});

// Funzione per inviare i dati alla API (POST) e salvare l'ID restituito
const POST = async (endpoint, data) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      ...options.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const responseData = await response.json();

  console.log("Dati inviati:", data);
  console.log("Risposta della API:", responseData);

  const id = responseData.id;
  console.log("ID salvato:", id);

  return id;
};

// Esempio di utilizzo della funzione POST
const exampleData = {
  title: "New Movie",
  description: "A description of the new movie."
};

POST('/movie', exampleData).then(id => {
  console.log("ID ottenuto dalla API:", id);
});