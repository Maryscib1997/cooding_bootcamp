const containerEl = document.querySelector(".container");
const searchBarEl = document.querySelector(".searchbar");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  // then - attesa della risposta json
  .then((data) => {
    // renderizziamo la lista di prodotti
    renderList(data, containerEl);

    searchBarEl.addEventListener("input", (event) => {
      const inputValue = event.target.value.toLowerCase();
      filterProducts(inputValue, data);
    });
  })

  .catch((err) => {
    console.error("ERRORE", err);

    const title = document.createElement("h1");
    title.textContent = "Errore nel caricamento dei prodotti";

    containerEl.append(title);
  });

  
function filterProducts(title, data) {
    const filteredProducts = data.filter((product) => {
      return product.title.toLowerCase().includes(title);
    });
  
    containerEl.innerHTML = "";
    renderList(filteredProducts, containerEl);
  }
  

// Object options richiesto dall'API Moviedb affinchè la nostra chiamata sia autorizzata.
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNmZTM0YmM0N2RiYTUyMGZlNTYxMDk1ZGU5MTUzYSIsInN1YiI6IjY2NjMxNjJkNDcyNTA2ZTRjMjE0ZmQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eaff1Qa3Q6Y2CSw6O3J4ZvnyF5tEqCEEst96ZWwIPmk'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
