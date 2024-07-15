import React, { useState } from 'react';
import './App.css';
import Layout from './layout';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [filter, setFilter] = useState('');

  const addBook = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((book, i) => i !== index);
    setBooks(newBooks);
  };

  const filteredBooks = filter 
    ? books.filter(book => book.genre.toLowerCase().includes(filter.toLowerCase()))
    : books;

  return (
    <Layout>
      <div className="App">
        <form onSubmit={addBook}>
          <input 
            type="text" 
            placeholder="Titolo" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Autore" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
          />
          <input 
            type="text" 
            placeholder="Genere" 
            value={genre} 
            onChange={(e) => setGenre(e.target.value)} 
            required 
          />
          <button type="submit">Aggiungi Libro</button>
        </form>

        <input 
          type="text" 
          placeholder="Filtra per genere" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)} 
        />

        <ul>
          {filteredBooks.map((book, index) => (
            <li key={index}>
              <span>{book.title} - {book.author} ({book.genre})</span>
              <button onClick={() => deleteBook(index)}>Elimina</button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default App;
