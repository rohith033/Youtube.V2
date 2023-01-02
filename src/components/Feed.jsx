import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar,Video} from "./";
import { FeatchFromApi } from "../utils/fetchFromAPI";
const Feed = () => {
   // When page renders call a function to get the videos of that section 
   // set the state of the vidos to currentstate
   const [selectedCategory,setselectedCategory] = useState('new');
   const [Videos,setVideos] = useState([]);
   useEffect(() => {
    FeatchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
    }, [selectedCategory]);
   
  return (
    <Stack sx={{flexDirection:{sm:'column',md:'row'}}}>
      <Box
     sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}
      >
          <Sidebar selectedCategory={selectedCategory} setselectedCategory = {setselectedCategory}/>
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>@Updated Youtube</Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography> 
          <Video tmp={Videos}/>
      </Box>

    </Stack>
  )
}

export default Feed
