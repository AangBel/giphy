import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const gifs = useSelector((store) => store.gifs)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submit");
    dispatch({
      type: "GET_GIFS",
      payload: search,
    });  

}
return (
  <Box
    component="form"
    sx={{
      "& > :not(style)": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  onSubmit={handleSubmit}
  >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          placeholder="Search"
          onChange={(event) => setSearch(event.target.value)}
          value={search}
        />
    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    <Button
        type="submit"
        variant="contained"
        size="large"
        disableElevation
    >
      Submit
     </Button>
  
    </Box>
);
}

  
export default Search;
