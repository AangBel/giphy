import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import Search from "./Search";
import Box from "@mui/material/Box";



export default function searchResults(){
  const dispatch = useDispatch();

    return(
        <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >

        </Box>
        )
}