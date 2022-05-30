import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function Causes() {
  const data = [
    {
      img: require("../../assets/yurak.png"),
      text: "CLEAN WATER",
    },
    {
      img: require("../../assets/tomchi.png"),
      text: "SPONSORSHIP",
    },
    {
      img: require("../../assets/love.png"),
      text: "HEALTH PRO",
    },
    {
      img: require("../../assets/book.png"),
      text: "BOOKS",
    },
  ];
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 30,
          }}
        >
          OUR CAUSES
        </Typography>
        <Typography
          sx={{ fontSize: 15, color: "#707070", pt: { md: "1.5%", sm: "5%" } }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <br /> industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type <br /> and scrambled it to make a type specimen book.
        </Typography>
      </Box>
      <Box sx={{ mt: { md: "3%", sm: "4%", xs: "8%" } }}>
        <Grid
          container
          rowSpacing={{ sm: 4, xs: 5 }}
          columnSpacing={{ md: 5, sm: 5 }}
        >
          {data.map((rasm, num) => (
            <Grid key={num} xs={12} sm={6} md={3} lg={3} xl={3} item>
              <Box sx={{ textAlign: "center" }}>
                <img src={rasm.img} />
                <Typography
                  sx={{ fontWeight: 550, fontSize: 14, pt: "6%", pb: "4%" }}
                >
                  {rasm.text}
                </Typography>
                <Typography sx={{ fontSize: 15, color: "#707070", pb: "4%" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ pb: "10%" }} />
    </Container>
  );
}

export default Causes;
