import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Aos from "aos";
import "aos/dist/aos.css";
import Counter from "../counter";
import BgImage from '../../../assets/hero-bg28.jpg'

export default () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  });


  return (
    <>
      <Box sx={{py:"100px", width: "100%", backgroundImage: `url(${BgImage})`, background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8) ),url(${BgImage})`, backgroundSize: "cover", }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ textAlign: "center", display: "flex", justifyContent: "center", }}>
          <Grid xs={12} md={6} sm={12}  >
            <Typography sx={{ color: "white", }}>
              <br />
              <Typography variant='h7' sx={{ fontWeight: "600", }}>YOUR LITTLE HELP NEEDED</Typography>
              <Typography variant='h4' sx={{ fontWeight: "600", color: "#FC563C", }}>HELP CINDY BACK TO SCHOOL</Typography>
              <br />
              <Typography variant='h7' sx={{ fontSize: "15px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
              <br />
              <br />

              <Button variant="contained" sx={{ borderRadius: "50px", background: "#FC563C" }}>Donate Now<ArrowRightAltIcon /></Button>
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Container>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8B8487",
              my:"4%"
            }}
          >
            <Grid container sx={{ my: "2%", display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} md={3} sm={12}>
                <Box sx={{ textAlign: 'center', width: '100%', mt:"30px" }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 40, color: 'black' }}>
                    <Counter number={1500} title="Posts" />
                  </Typography>
                  <Typography>
                    Successful Projects
                  </Typography>
                  <br />
                  <Typography sx={{ display: "flex", justifyContent: "center" }}>
                    <hr style={{ width: "40px", backgroundColor: "#FF573D", border: "1.5px solid #FF573D", }} />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Box sx={{ textAlign: 'center', width: '100%',  mt:"30px"}}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 40, color: 'black' }}>
                    <Counter number={1400} title="Posts" />
                  </Typography>
                  <Typography>
                    People Impacted
                  </Typography>
                  <br />
                  <Typography sx={{ display: "flex", justifyContent: "center" }}>
                    <hr style={{ width: "40px", backgroundColor: "#FF573D", border: "1.5px solid #FF573D", }} />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={12} >
                <Box sx={{ textAlign: 'center', width: '100%', mt:"30px" }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 40, color: 'black' }}>
                    <Counter number={1250} title="Posts" />
                  </Typography>

                  <Typography>
                    Money Donated
                  </Typography>
                  <br />
                  <Typography sx={{ display: "flex", justifyContent: "center" }}>
                    <hr style={{ width: "40px", backgroundColor: "#FF573D", border: "1.5px solid #FF573D", }} />
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={12}>
                <Box sx={{ textAlign: 'center', width: '100%', mt:"30px" }}>
                  <Typography sx={{ fontWeight: 'bold', fontSize: 50, color: 'black' }}>
                    <Counter number={1600} title="Posts" />
                  </Typography>
                  <Typography>
                    Total Volunteers
                  </Typography>
                  <br />
                  <Typography sx={{ display: "flex", justifyContent: "center" }}>
                    <hr style={{ width: "40px", backgroundColor: "#FF573D", border: "1.5px solid #FF573D", }} />
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <hr style={{border:"1px solid #E5E5E5"}} />
    </>
  );
};