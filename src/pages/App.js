import React, { useEffect, useState } from "react";
import GitHubButton from "react-github-btn";
import { TwitterFollowButton } from "react-twitter-embed";
import BackgroundImage from "../assets/images/background.png";
import "../styles/App.css";
import { callTestApi } from "../utils/TestConnector";

const App = () => {
  const [loadedTodo, setLoadedTodo] = useState();

  const loadTodo = () => {
    setLoadedTodo({ id: -2 });
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    callTestApi(randomNumber).then(result => setLoadedTodo(result));
  };

  useEffect(() => loadTodo(), []);

  const getResultText = () => {
    if (loadedTodo) {
      switch (loadedTodo.id) {
        case -2:
          return <div className="loader" />;
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
              Todo {loadedTodo.id} was fetched from the{" "}
              <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
              !
            </p>
          );
      }
    }
    return <div className="loader" />;
  };

  return (
    <>
      <div className="socialBanner">
        <TwitterFollowButton screenName={"coding_max"} />
        <GitHubButton
          href="https://github.com/mjoellnier"
          data-color-scheme="no-preference: dark; light: dark; dark: dark;"
          data-size="large"
          aria-label="Follow @mjoellnier on GitHub"
          style={{ float: "right" }}
        >
          Follow @mjoellnier
        </GitHubButton>
      </div>
      <div
        id="app-wrapper"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {getResultText()}
        <input
          id="todoButton"
          onClick={loadTodo}
          type="button"
          value="Get Todo"
        />
      </div>
    </>
  );
};

export default App;
