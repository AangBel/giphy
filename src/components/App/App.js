import React from 'react';
import Search from '../Search/Search';
// import Favorites from './Favorites/Favorites'
import Favorites from '../Favorites/Favorites.jsx';
import SearchResult from '../Search/SearchResult';


function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search/>
      <Favorites/>
      {/* Add the Search Results Component here, so your search results show up on the the screen */}
      <SearchResult/>
      
    </div>
  );
}

export default App;
