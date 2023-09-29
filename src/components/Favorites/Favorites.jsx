import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Button from "@mui/material/Box";



function Favorites() {

    const favoritesSelector =  useSelector((store) => store.favorites);
    const dispatch = useDispatch();
    console.log('things');

    useEffect(() => {
    //   getFavoritesSelector();
    }, []);

    return (
      <>
      {/* <Button >❤️</Button> */}
      
      </>
        
    );
  }

export default Favorites;