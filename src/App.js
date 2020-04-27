import React,{useEffect,useState} from 'react';
import Recipe from './components/Recipe';
import './main.scss';

const APP_ID = '73415939';
const APP_KEY = 'ecee6e4873637854f9a371a30c04db85';

const App = () => { 

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana');

    useEffect(() =>{
      getRecipes();
    });

    const getRecipes = async() => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    };

    const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };


  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar"type="text" value={search} onChange ={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe-container">
      {recipes.map((recipes,key) => (
         <Recipe 
            key={key}
            title={recipes.recipe.label}
            calories={recipes.recipe.calories}
            img={recipes.recipe.image}
            ingredients={recipes.recipe.ingredients}
          />
      ))}
      </div>

    </div>
  );
}
export default App;
