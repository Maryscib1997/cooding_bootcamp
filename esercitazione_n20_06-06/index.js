const containerEl = document.querySelector(".container");

// chiamata a https://fakestoreapi.com/products
fetch('https://fakestoreapi.com/products')
  .then(response => {
    // Controlliamo se risposta è andata a buon fine
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Convertiamo la risposta in formato JSON
    return response.json();
  })
  .then(data => {
    // Stampiamo a console i dati ottenuti
    const productCard = document.createElement('div');
    const title = document.createElement('p');
    const productImage = document.createElement('img');
    productCard.classList.add('product-card');
    title.textContent = data[0].title;
    productImage.src = data[0].image

    productCard.append(productImage, title);
    containerEl.append(productCard);
    console.log('Dati ottenuti', data);
    
  })
  .catch(error => {
    // Gestiamo eventuali errori
    console.error('C\'è stato un problema con l\'operazione di fetch:', error);
  });
