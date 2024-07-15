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
