// Importing Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

//Importing Components
import Photo from "./components/Photo";
import About from "./components/About";

// Importing Constants
import { API_KEY } from "./constants";

// Importing StyleSheets
import "./App.css";

const App = () => {
  const [apodData, setApodData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setApodData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {apodData.length === 0 && <h2>PLEASE STAND BY...</h2>}
      <Photo url={apodData.url} />
      <About
        copyright={apodData.copyright}
        date={apodData.date}
        explanation={apodData.explanation}
        title={apodData.title}
      />
    </div>
  );
};

export default App;
