//import styles from "./app.module.css";
import { useState } from "react";

function App() {
 
  const disney = {
    personaggio1: "pippo",
    personaggio2: "pluto",
    personaggio3: "maurizio",
  };

 const keys = ["personaggio1", "personaggio2"];

 keys.map(key => {
  disney[key] = "maurizio";
  //console.log(key + ':' + disney[key]);
 });

// console.log("disney", disney.personaggio1); 
 
 const [input, setInput] = useState({
  pippo: "", 
  minnie: "",
  paperino: "",
  qui: "",
  quo: "",
  qua: "",
});

const handleChange = () => {
  setInput((prevState) => {
    return {...prevState, [e.target.name]: e.target.value};
  });
  console.log(input);
}

  return (
    <>
      <form>
        <label>Pippo</label>
        <input name="pippo" placeholder="Pippo" onChange={handleChange}/>
        <label>Minnie</label>
        <input name="minnie" placeholder="Minnie" onChange={handleChange}/>
        <label>Paperino</label>
        <input name="paperino" placeholder="Paperino" onChange={handleChange}/>
        <label>Qui</label>
        <input name="qui" placeholder="Qui"  onChange={handleChange}/>
        <label>Qui</label>
        <input name="quo" placeholder="Quo" onChange={handleChange}/>
       <label>Qui</label>
        <input name="qua" placeholder="Qua" onChange={handleChange}/>
      </form>
    </>
  );
}

export default App;