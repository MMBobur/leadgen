import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const dataBaner = [
	{
		img: "https://www.themezaa.com/html/leadgen/demo/charity/images/bg-image/agency-slider-01.jpg",
		text: "Give a little. ",
		text2: " Change a lot.",
	},
	{
		img: "https://www.themezaa.com/html/leadgen/demo/charity/images/bg-image/agency-slider-02.jpg",
		text: "We waiting ",
		text2: " for your help",
	},
	{
		img: "https://www.themezaa.com/html/leadgen/demo/charity/images/bg-image/agency-slider-03.jpg",
		text: "More charity.",
		text2: " More better life.",
	},
];
function Banner() {
	return (
		<>
			<Carousel responsive={responsive}>
				{dataBaner.map((item) => {
					return (
						<Box
							sx={{
								// backgroundImage: `url(${item.img})`,
								background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img})`,
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",

								backgroundSize: "cover",
								minHeight: "62vh",
								border: 2,
								width: "100%",
								pb: "15%",
								pt: "22%",
							}}
						>
							<Container maxWidth="lg">
								<Grid container>
									<Grid item xs={12} sm={8} md={6} lg={6}>
										<Box sx={{ mt: "5%" }}>
											<Typography
												sx={{
													color: "red",
													fontSize: { xs: "37px", sm: "60px", lg: "70px" },
												}}
												// variant="h2"
												// fontSize={((xs = "45px"), (lg = "60px"))}
												fontWeight="bold"
											>
												{item.text}

												{item.text2}
											</Typography>
											<Typography sx={{ color: "white" }}>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Ab, ea.
											</Typography>
											<Typography sx={{ color: "white" }}>
												Lorem ipsum dolor sit amet consectetur adipisicing elit
											</Typography>
											<Button
												variant="text"
												sx={{
													color: "white",
													borderRadius: 50,
													border: "2px solid #fff",
													px: "2%",
													py: "0.3%",
													my: "5%",
												}}
											>
												DONATE NOW >
											</Button>
										</Box>
									</Grid>
								</Grid>
							</Container>
						</Box>
					);
				})}
			</Carousel>
			;
		</>
	);
}

export default Banner;
