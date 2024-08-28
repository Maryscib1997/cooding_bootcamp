import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

// Creazione del contesto per il carrello
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

// Componente Modale
const Modal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.title}</h2>
        <img src={product.images[0]} alt={product.title} width="100" />
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <button onClick={() => addToCart(product)}>Aggiungi al Carrello</button>
        <Link to={`/product/${product.id}`} onClick={onClose}>Vai alla Pagina del Prodotto</Link>
      </div>
    </div>
  );
};

// Componente Home
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Errore nel fetch dei prodotti:', error);
        setError('Errore nel recupero dei prodotti');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Home</h1>
      <Link to="/cart">Vai al Carrello</Link>
      <div className="product-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h2>{product.title}</h2>
            {product.images && product.images.length > 0 ? (
              <img 
                src={product.images[0]} 
                alt={product.title} 
                onError={(e) => {
                  console.error('Errore di caricamento immagine:', e.target.src);
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/100';
                }} 
              />
            ) : (
              <p>Immagine non disponibile</p>
            )}
            <p>{product.price} €</p>
            <button onClick={() => openModal(product)}>Visualizza Dettagli</button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <Modal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

// Componente Cart
const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Carrello</h1>
      <Link to="/">Torna alla Home</Link>
      <div className="cart-container">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <h2>{item.title}</h2>
            {item.images && item.images.length > 0 ? (
              <img 
                src={item.images[0]} 
                alt={item.title} 
                onError={(e) => {
                  console.error('Errore di caricamento immagine:', e.target.src);
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/100';
                }} 
              />
            ) : (
              <p>Immagine non disponibile</p>
            )}
            <p>{item.price} €</p>
            <button onClick={() => removeFromCart(item.id)}>Rimuovi dal Carrello</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente Dettaglio Prodotto
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Errore nel fetch del prodotto:', error);
        setError('Errore nel recupero del prodotto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Prodotto non trovato</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} width="100" />
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button onClick={() => addToCart(product)}>Aggiungi al Carrello</button>
      <Link to="/">Torna alla Home</Link>
    </div>
  );
};

// App principale con Router
const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
