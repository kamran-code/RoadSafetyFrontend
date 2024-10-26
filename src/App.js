import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/accidents/accidents");
        const result = await response.json(); 
        console.log(result);
        
        setData(result.Accidents); 
        setLoading(false);
      } catch (error) {
        // console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      
      <ul>
        {data.map((item, index) => (
          <li key={index}>
           <button> {item.description}</button> - <button>{item.location}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
