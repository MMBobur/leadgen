import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player/youtube'
import Grid from '@mui/material/Grid';
import { CardActionArea, } from '@mui/material';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PanToolIcon from '@mui/icons-material/PanTool';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpCindy from './helpcindy'
import './index.css'

const data = [
  {
    icon: <LocalAtmIcon style={{ color: "#FF573D", fontSize: "50px" }} />,
    text: "DONATE MONEY",
    text2: "Lorem Ipsum is simply dummy of the printing and typesetting and industry. Lorem Ipsum been."
  },
  {
    icon: <PanToolIcon style={{ color: "#FF573D", fontSize: "50px" }} />,
    text: "BECOME VOLUNTEER",
    text2: "Lorem Ipsum is simply dummy of the printing and typesetting and industry. Lorem Ipsum been."


  },
  {
    icon: <MenuBookIcon style={{ color: "#FF573D", fontSize: "50px" }} />,
    text: "CHILD EDUCATION",
    text2: "Lorem Ipsum is simply dummy of the printing and typesetting and industry. Lorem Ipsum been."


  },
  {
    icon: <FavoriteBorderIcon style={{ color: "#FF573D", fontSize: "50px" }} />,
    text: "MEDICINE",
    text2: "Lorem Ipsum is simply dummy of the printing and typesetting and industry. Lorem Ipsum been."


  },
];

// Only loads the YouTube player

function Help() {

  return (
    <>
      <Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", my: "50px" }}>
            <Grid item md={6} sm={12} xs={12}>
              <Box sx={{ width: "100%" }}>
                <Typography variant="h4" sx={{ fontWeight: "600" }}>
                  HOW CAN YOU HELP
                </Typography>
                <br />
                <Typography variant="h7" color="text.secondary">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
                <br />
                <br />
                <br />

                <ReactPlayer controls url='https://youtu.be/dA8Smj5tZOQ' width='100%' sx={{}} />

              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>






      <Box sx={{ display: "flex", justifyContent: "center", mb: "80px" }}>
        <Box sx={{ width: "88%" }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data.map((item) => {
              return (
                <Grid xs={12} sm={6} md={3} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                  <Box sx={{ m: "15px", width: "100%" }}>
                    <CardActionArea>
                      <Typography>
                        {item.icon}
                      </Typography>
                      <Box>
                        <br />
                        <Typography variant="h6" sx={{ fontSize: "17px" }}>
                          {item.text}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary">
                          {item.text2}
                        </Typography>
                      </Box>
                    </CardActionArea>
                  </Box>

                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
      <HelpCindy />







    </>
  );
}


export default Help