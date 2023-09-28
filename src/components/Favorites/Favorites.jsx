import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";



function Favorites() {
    const favoritesSelector =  useSelector((store) => store.favorites);
    console.log('things');
    return (
        <h1>hi</h1>
    );
  }

export default Favorites;