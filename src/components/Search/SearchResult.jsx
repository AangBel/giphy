// This file should
// Be a component (you're mostly there, don't forget to export the function)
// Get the the search results (the list of urls) from the reducer (you already have that on line 15)
// We want to loop over that list, and for each url, put the image on the dom
//
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "./Search";
import Box from "@mui/material/Box";

export default function SearchResult() {
  const gifs = useSelector((state) => state.giphyReducer);
  //   const dispatch = useDispatch();

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      {gifs.map((url) => (
        <img src={url}></img>
      ))}
    </Box>
  );
}
