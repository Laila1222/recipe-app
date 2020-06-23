import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Searchbar from "./components/Searchbar";
import Recipe from "./components/Recipe";
import Home from './pages/Home';
import "./App.css";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import FullRecipe from './pages/FullRecipe';

const App = () => {
  const APP_ID = "507c74ab";
  const APP_KEY = "e4d64fd5836fb27e09a75f1c81908682";

  const fakeData = [
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
    {
      label: "Rustic Italian Bread",
      calories: 325,
      image:
        "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
      time: 190,
    },
  ];
  console.log(fakeData);

  const [url, setUrl] = useState(
    `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=bread&health=vegetarian&excluded=flour`
  );
  const [recipes, setRecipes] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState();

  const getChosenRecipe = (fromChild) => {
    console.log(fromChild);
  }



  // const runSearch = (url) => {
  //   setUrl(url);
  //   getRecipes(url);
  // };

  // useEffect( () => {
  //    getRecipes(url);
  // }, []);

  // const getRecipes = async (url) => {
  //   const response = await fetch(url
  //   );
  //   const data = await response.json();
  //   console.log(data.hits);
  //   setRecipes(data.hits);
  // };

  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/"><Home getChosenRecipe={getChosenRecipe} /></Route>
          <Route path="/recipe">
            <FullRecipe />
          </Route>

          
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
