import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
// import Button from "@mui/material/Box";



function Favorites() {
  const favorites = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    
  
  }, []);

  return (
    <div>
      {favorites.map((favorite) => (
        <img key={favorite.url} src={favorite.url} />
      ))}
    </div>
  );
}

export default Favorites;  

