import React, { useEffect, useState } from "react";
import "../styles/App.css";
import BackgroundImage from "../assets/images/background.png";
import { callTestApi } from "../utils/TestConnector";

const App = () => {
  const [loadedTodo, setLoadedTodo] = useState();

  useEffect(() => {
    let randomNumber = Math.floor(Math.random() * 10);
    callTestApi(randomNumber).then(result => setLoadedTodo(result));
  }, []);

  useEffect(() => {
    console.log(loadedTodo);
  }, [loadedTodo]);

  return (
    <div
      id="app-wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <h2>Welcome to the minimal PWA example!</h2>
      {loadedTodo ? (
        <p>
          Todo {loadedTodo.id} with the title <i>{loadedTodo.title}</i> was
          fetched from the API!
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
