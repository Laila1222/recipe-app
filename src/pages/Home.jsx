import React, {  useState } from "react";
import Searchbar from "../components/Searchbar";
import Recipe from "../components/Recipe";
// import { GlobalProvider, GlobalContext } from "../context/GlobalState";
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


const Home = () => {

  const [url, setUrl] = useState(
    `https://api.edamam.com/search?app_id=507c74ab&app_key=e4d64fd5836fb27e09a75f1c81908682&q=bread&health=vegetarian&excluded=flour`
  );
  const [recipes, setRecipes] = useState([]);
  return (
    <div className="app">
      {/* <Searchbar runSearch={runSearch} /> */}
      <Searchbar />
      <div className="recipes-container">
        {fakeData.map((recipe) => (
          <Recipe key={recipe.label} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
