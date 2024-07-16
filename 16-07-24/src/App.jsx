import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [advice, setAdvice] = useState(null);

  const handleCount = () => {
    setCount(count + 1);
  };

  // chiamata API ogni volta che `count` cambia
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, [count]);

  // chiamata API solo al primo render del componente
  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(({ slip }) => {
        setAdvice(slip);
      });
  };

  useEffect(() => {
    getAdvice();
  }, []);

  // chiamata API al primo render e aggiorna il local storage
  useEffect(() => {
    getAdvice();
    const savedAdvice = localStorage.getItem("advice");
    if (savedAdvice) {
      setAdvice(JSON.parse(savedAdvice));
    }
  }, []);

  // Aggiorna il local storage ogni volta che `advice` cambia
  useEffect(() => {
    if (advice) {
      setLocalStorage();
      logLocalStorage();
    }
  }, [advice]);

  const setLocalStorage = () => {
    localStorage.setItem("advice", JSON.stringify(advice));
  };

  const logLocalStorage = () => {
    const advice = localStorage.getItem("advice");
    console.log("log in storage:", JSON.parse(advice));
  };

  // chiamata API ogni minuto e aggiorna lo stato
  useEffect(() => {
    const interval = setInterval(() => {
      getAdvice();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Lista utenti: {count}</h1>
      {user && <p>Utente: {user.name}</p>}
      <button onClick={handleCount}>Add</button>

      <hr />
      {advice && <p>Advice: {advice.advice}</p>}
      <button onClick={getAdvice}>Get Advice</button>
      <button onClick={setLocalStorage}>Set local storage</button>
      <button onClick={logLocalStorage}>Log local storage</button>
    </>
  );
}

export default App;