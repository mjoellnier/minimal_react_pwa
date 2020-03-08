import React, { useEffect, useState } from "react";
import "../styles/App.css";
import BackgroundImage from "../assets/images/background.png";
import { callTestApi } from "../utils/TestConnector";

const App = () => {
  const [loadedTodo, setLoadedTodo] = useState();

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    callTestApi(randomNumber).then(result => setLoadedTodo(result));
  }, []);

  const getResultText = () => {
    if (loadedTodo) {
      switch (loadedTodo.id) {
        case -1:
          return (
            <p>
              You're offline and tried to fetch the id {loadedTodo.number} which
              was not prechached!
            </p>
          );
        default:
          return (
            <p>
              Todo {loadedTodo.id} with the title <i>{loadedTodo.title}</i> was
              fetched from the{" "}
              <a href="https://jsonplaceholder.typicode.com/" target="_blank">
                API
              </a>
              !
            </p>
          );
      }
    }
    return <p>Loading...</p>;
  };

  return (
    <div
      id="app-wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h2>Welcome to the minimal PWA example!</h2>
      {getResultText()}
    </div>
  );
};

export default App;
