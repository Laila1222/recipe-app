import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
// import Searchbar from "./components/Searchbar";
// import Recipe from "./components/Recipe";
import Home from "./pages/Home";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import FullRecipe from "./pages/FullRecipe";

const App = () => {
  const APP_ID = "507c74ab";
  const APP_KEY = "e4d64fd5836fb27e09a75f1c81908682";

  const [url, setUrl] = useState(
    `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=bread&health=vegetarian&excluded=flour`
  );
  const [recipes, setRecipes] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState();

  const runSearch = (url) => {
    console.log(url);
    setUrl(url);
    getRecipes(url);
  };

  useEffect(() => {
    getRecipes(url);
  }, []);

  const getRecipes = async (url) => {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home runSearch={runSearch} recipes={recipes} />
          </Route>
          <Route path="/recipe">
            <FullRecipe />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
