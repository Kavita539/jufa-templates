import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import logo from "../../assets/logo.png";

const navItems = ["Home", "Pages", "Our Courses", "Shop", "Blog", "Contact Us"];

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ width: "100%", background: "#fff" }}>
      <Toolbar
        sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}
      >
        <Typography component= "img" src={logo} alt="jufa-logo"/>
        <Stack direction="row">
          {navItems.map((navItem, index) => (
            <Button key={index} endIcon={index === 5 ? "" : <ExpandMoreIcon sx={{color: '#212121', ml: 0}}/>}>
              <Typography
                variant="body1"
                sx={{fontsize: "12px", color: "#212121", textTransform: "capitalize"}}
              >
                {navItem}
              </Typography>
            </Button>
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button
            startIcon={<ExitToAppIcon sx={{ color: "#ef6c00", mr: 0 }} />}
            sx={{ color: "#212121", fontWeight: "600", textTransform: "capitalize" }}
          >
            sign in
          </Button>
          <Button
            variant="contained"
            endIcon={<BorderColorOutlinedIcon />}
            sx={{ background: "#ef6c00", color: "#fff", borderRadius: 0, textTransform: "capitalize", boxshadow: "none" }}
          >
            Get started
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
