const articleList = document.getElementById('article-list');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(articles => {
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.body}</p>
                <p>Autore: ${article.userId}</p>
            `;
            articleList.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.error('Errore nel recupero degli articoli:', error);
    });
