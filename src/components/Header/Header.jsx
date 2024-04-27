import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { useContext, useState } from "react";
import Drawer from "@mui/joy/Drawer";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import { LuMenu } from "react-icons/lu";
import Search from "@mui/icons-material/Search";
import Mode from "./Mode";
import { Context } from "../../routeControles/ContextServer";
import Logo from "../../assets/images/logo.png";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const { mode } = useContext(Context);
  const [open, setOpen] = useState(false);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          background: mode === "light" ? "white" : "#1D232A",
          color: mode === "light" ? "black" : "white",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img width={150} src={Logo} alt="" />
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <div>
              <IconButton
                variant="outlined"
                className=" relative "
                color="neutral"
                onClick={() => setOpen(true)}
              >
                <LuMenu
                  className={`text-3xl text-${
                    mode === "light" ? "black" : "white"
                  }`}
                />
              </IconButton>
              <Drawer open={open} onClose={() => setOpen(false)}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    ml: "auto",
                    mt: 1,
                    mr: 2,
                  }}
                >
                  <Typography
                    component="label"
                    htmlFor="close-icon"
                    fontSize="sm"
                    fontWeight="lg"
                    sx={{ cursor: "pointer" }}
                  >
                    Close
                  </Typography>
                  <ModalClose id="close-icon" sx={{ position: "initial" }} />
                </Box>
                <Input
                  size="sm"
                  placeholder="Search"
                  variant="plain"
                  endDecorator={<Search />}
                  slotProps={{
                    input: {
                      "aria-label": "Search anything",
                    },
                  }}
                  sx={{
                    m: 3,
                    borderRadius: 0,
                    borderBottom: "2px solid",
                    borderColor: "neutral.outlinedBorder",
                    "&:hover": {
                      borderColor: "neutral.outlinedHoverBorder",
                    },
                    "&::before": {
                      border: "1px solid var(--Input-focusedHighlight)",
                      transform: "scaleX(0)",
                      left: 0,
                      right: 0,
                      bottom: "-2px",
                      top: "unset",
                      transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                      borderRadius: 0,
                    },
                    "&:focus-within::before": {
                      transform: "scaleX(1)",
                    },
                  }}
                />
                <List
                  size="lg"
                  component="nav"
                  sx={{
                    flex: "none",
                    fontSize: "xl",
                    "& > div": { justifyContent: "center" },
                  }}
                >
                  <ListItemButton sx={{ fontWeight: "lg", color: "black" }}>
                    Home
                  </ListItemButton>
                  <ListItemButton>About</ListItemButton>
                  <ListItemButton>Studio</ListItemButton>
                  <ListItemButton>Contact</ListItemButton>
                </List>
              </Drawer>
            </div>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },

              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img width={150} src={Logo} alt="" />
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              sx={{
                my: 2,
                color: mode === "light" ? "black" : "white",
                display: "block",
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                my: 2,
                color: mode === "light" ? "black" : "white",
                display: "block",
              }}
            >
              All Tourists Spot
            </Button>
            <Button
              sx={{
                my: 2,
                color: mode === "light" ? "black" : "white",
                display: "block",
              }}
            >
              Add Tourists Spot
            </Button>
            <Button
              sx={{
                my: 2,
                color: mode === "light" ? "black" : "white",
                display: "block",
              }}
            >
              My List
            </Button>
          </Box>

          <Box sx={{}}>
            <Mode></Mode>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
