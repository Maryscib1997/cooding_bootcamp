<<<<<<< HEAD
import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header className="header">
        <h1>Catalogo di Libri</h1>
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Catalogo di Libri</p>
      </footer>
    </div>
  );
};

export default Layout;
=======
import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header className="header">
        <h1>Catalogo di Libri</h1>
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 Catalogo di Libri</p>
      </footer>
    </div>
  );
};

export default Layout;
>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
