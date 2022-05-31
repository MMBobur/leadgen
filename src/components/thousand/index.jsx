import { FavoriteBorderOutlined, SentimentSatisfiedAltOutlined, LanguageOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./style.css";

const Thousand = () => {
    const data=[
        {icon:  <FavoriteBorderOutlined sx={{fontSize: '40px', color: '#ff573d', fontWeight: 500 }}/>, title: 'Donate Now!'},
        {icon:  <SentimentSatisfiedAltOutlined sx={{fontSize: '40px', color: '#ff573d', fontWeight: 500 }}/>, title: 'Join Us Now'},
        {icon:  <LanguageOutlined sx={{fontSize: '40px', color: '#ff573d', fontWeight: 500 }}/>, title: 'Get Involved'}
    ]
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container columns={12} spacing={5} sx={{paddingY: '5%'}}>
          <Grid item xs={12} md={8} lg={7}>
            <img
              style={{ maxWidth: "650px", width: "100%" }}
              src="https://www.themezaa.com/html/leadgen/demo/charity/images/application-screenshot-img-08.png"
              alt=""
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            lg={5}
            sx={{ marginTop: { lg: "8vh", xs: "0px" } }}
          >
            <Container>
              <Typography sx={{ fontSize: "14px", color: "#282828" }}>
                HELP THE POOR PEOPLE
              </Typography>
              <Typography
                sx={{ fontSize: "35px", color: "#282828", fontWeight: 600 }}
              >
                Thousand of children are waiting for help!
              </Typography>{" "}
              <br />
              <Typography
                className="font"
                sx={{ fontSize: "15px", color: "#707070" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>{" "}
              <br />
              <Button
                sx={{
                  backgroundColor: "#ff573d",
                  width: "153px",
                  height: "36px",
                  color: "white",
                  borderRadius: 25,
                }}
              >
                donate today
              </Button>
            </Container>
          </Grid>
        </Grid>
        <hr />
        <Grid container columns={12} sx={{paddingTop: '5%', paddingBottom: '15%'}}>
         {
             data.map((item, ind)=>(
                <Grid key={ind} lg={4} md={6} xs={12}>
                <Box sx={{display: 'flex', width: '320px', gap: '5%'}}>
                    {item.icon}
                  <Box>
                    <Typography  sx={{ fontSize: "15px", color: "#282828", fontWeight: 600 }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: "15px", color: "#707070" }}>
                      Lorem Ipsum is simply dummy text printing and typesetting 
                      industry been the industry's standard.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
             ))
         }
        </Grid>
      </Container>
    </Box>
  );
};

export default Thousand;
