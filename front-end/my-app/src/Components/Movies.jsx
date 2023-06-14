import React, { useEffect, useState } from "react";

export const Movies = () => {
  const [data, setData] = useState([]);

  const getMovie = () => {
    try {
      fetch("http://localhost:3001/")
        .then((res) => res.json())
        .then((res) => setData(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
    console.log(data);
  }, []);

  return (
    <div id="main-container">
      <h1>Movie List</h1>
      <div className="container">
        {data.map((el) => (
          <div className="card">
            <h2>Title : {el.title}</h2>
            <h2>5</h2>
            <h2>22/02/2023</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
