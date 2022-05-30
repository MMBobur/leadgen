import { Box, Button, Container, Grid, Link } from "@mui/material";
import React from "react";
import logo from "../../assets/logo-white.png";
import LoginIcon from "@mui/icons-material/Login";
// import MenuIcon from "@mui/icons-material/Menu";
import Item from "./Item/index";
import "./index.css";
const Nav = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [navbar, setNavbar] = React.useState(false);
	function handleClick(event) {
		if (anchorEl !== event.currentTarget) {
			setAnchorEl(event.currentTarget);
		}
	}

	function handleClose() {
		setAnchorEl(null);
	}
	const changeWihd = () => {
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener("scroll", changeWihd);
	return (
		<Box
			sx={{
				position: "absolute",
				width: "100%",
				zIndex: 1000,
				// ":active": { bgcolor: "red" },
			}}
		>
			<Box
				sx={{
					width: "100%",
					// bgcolor: "black",

					position: "fixed",
					zIndex: 1000,
				}}
				className={navbar ? "navbar activ" : "navbar"}
			>
				<Container maxWidth="lg">
					<Box
						sx={{
							paddingY: "1.7%",
							display: "flex",
							width: "100%",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								width: "100%",
							}}
						>
							<Grid container spacing={0}>
								<Grid
									item
									lg={4}
									xs={6}
									sm={6}
									md={6}
									container
									spacing={0}
									// sx={{ border: 1 }}
								>
									<Box sx={{ py: "1%" }}>
										<img src={logo} alt="" width="90%" />
									</Box>
								</Grid>
								<Grid
									item
									lg={8}
									xs={6}
									sm={6}
									md={6}
									container
									spacing={0}
									sx={{ display: "flex", justifyContent: "end", pl: "2%" }}
								>
									<Box
										sx={{
											display: {
												lg: "flex",
												md: "none",
												sm: "none",
												xs: "none",
											},
											justifyContent: "space-around",
											alignItems: "center",
											width: "100%",
										}}
										// className="border-2"
									>
										{[
											"ABOUT US",
											"CAUSES",
											"MISSION",
											"SUCCESS STORY",
											"CONTACT",
										].map((item) => (
											<Box>
												<Link
													href="#"
													underline="none"
													sx={{
														color: "white",
														fontSize: "70%",
														fontWeight: 550,
														":hover": {
															color: "wheat",
															// borderBottom: "1px solid #fff",
														},
													}}
												>
													{item}
												</Link>
											</Box>
										))}
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
												alignItems: "center",
												// border: "2px solid #fff",
											}}
										>
											{["JOIN US", "DONATE"].map((item) => (
												<Button
													size="small"
													variant="contained"
													sx={{
														bgcolor: "red",
														borderRadius: 50,
														fontSize: "70%",
														fontWeight: 650,
														px: "20px",
														mx: "5px",
														":hover": { bgcolor: "red" },
													}}
												>
													{item}
												</Button>
											))}
										</Box>
									</Box>
									<Box
										sx={{
											display: {
												lg: "none",
												md: "flex",
												sm: "flex",
												xs: "flex",
											},
											justifyContent: "end",

											alignItems: "center",
											width: "100%",
										}}
									>
										<Box>
											<Item />
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Nav;
