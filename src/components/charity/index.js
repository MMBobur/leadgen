import React from "react";
import {
  Box,
  Container,
  Grid,
  Tab,
  Typography,
  Tabs,
  Button,
} from "@mui/material";
import bgimg from "../../assets/bg.jpg";
import PropTypes from "prop-types";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Charity() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={6} xl={6} item>
          <img src={bgimg} style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          item
          sx={{
            bgcolor: "#FF573D",
            color: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ pt: "10%", pl: "10%", pr: "10%" }}>
            <Typography sx={{ fontSize: { md: 35, sm: 30, xs: 23 } }}>
              Big Charity Fund For Childs.
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: { md: 35, sm: 30, xs: 25 },
                fontWeight: 200,
                lineHeight: 1,
              }}
            >
              Donate & support our work <br /> today.
            </Typography>
            <br />
            <br />
            <hr />
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  // aria-label="lab API tabs example"
                >
                  <Tab sx={{ color: "white" }} label="Item One" value="1" />
                  <Tab sx={{ color: "white" }} label="Item Two" value="2" />
                  <Tab sx={{ color: "white" }} label="Item Three" value="3" />
                  <Tab sx={{ color: "white" }} label="Item Three" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ fontSize: 15 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                <br />
                <Button
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    pl: "5%",
                    pr: "5%",
                    color: "red",
                  }}
                >
                  READ MORE >
                </Button>
              </TabPanel>
              <TabPanel value="2" sx={{ fontSize: 15 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                <br />
                <Button
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    pl: "5%",
                    pr: "5%",
                    color: "red",
                  }}
                >
                  READ MORE >
                </Button>
              </TabPanel>
              <TabPanel value="3" sx={{ fontSize: 15 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                <br />
                <Button
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    pl: "5%",
                    pr: "5%",
                    color: "red",
                  }}
                >
                  READ MORE >
                </Button>
              </TabPanel>
              <TabPanel value="4" sx={{ fontSize: 15 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the standard dummy
                text.
                <br />
                <br />
                <br />
                <Button
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    pl: "5%",
                    pr: "5%",
                    color: "red",
                  }}
                >
                  READ MORE >
                </Button>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
      ;
    </>
  );
}

export default Charity;
