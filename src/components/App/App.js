import React from 'react';
import Search from '../Search/Search';
// import Favorites from './Favorites/Favorites'
import Favorites from '../Favorites/Favorites.jsx';


function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search/>
      <Favorites/>
    </div>
  );
}

export default App;
