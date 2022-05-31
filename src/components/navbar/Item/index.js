import * as React from "react";
import Button from "@mui/material/Button";
import { Menu, Box, Link, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<MenuIcon sx={{ color: "white" }} />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				style={{ padding: 0, margin: 0 }}
			>
				<Box sx={{ width: "100vw", bgcolor: "black", m: 0, px: 0 }}>
					{["ABOUT US", "CAUSES", "MISSION", "SUCCESS STORY", "CONTACT"].map(
						(item) => (
							<Box>
								<Link
									href="#"
									underline="none"
									sx={{
										color: "white",
										fontSize: "100%",

										py: "10px",
										fontWeight: 550,
										":hover": {
											color: "wheat",
											// borderBottom: "1px solid #fff",
										},
									}}
								>
									<Typography sx={{ my: "5%", mx: "2%" }}> {item}</Typography>

									<hr />
								</Link>
							</Box>
						)
					)}
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
								my: "5%",
								":hover": { bgcolor: "red" },
							}}
						>
							{item}
						</Button>
					))}
				</Box>
			</Menu>
		</div>
	);
}
