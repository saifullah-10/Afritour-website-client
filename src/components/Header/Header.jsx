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
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase";

function Header() {
  const navigate = useNavigate();
  const { mode, user, setUser } = useContext(Context);
  const { photoURL, displayName } = user || {};
  const [open, setOpen] = useState(false);
  console.log(photoURL);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign Out");
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <AppBar position="sticky" className="lg:mt-5 mt-3">
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

          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <div>
              <IconButton
                variant="outlined"
                className=" relative"
                color="neutral"
                onClick={() => setOpen(true)}
              >
                <LuMenu
                  className={`text-3xl ${
                    mode == "light" ? "text-black" : "text-white"
                  } `}
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
                    <Link to={"/"} className=" w-full text-center">
                      {" "}
                      Home
                    </Link>
                  </ListItemButton>

                  <ListItemButton>
                    <Link to={"/allspot"} className=" w-full text-center">
                      {" "}
                      All Tourists Spot
                    </Link>
                  </ListItemButton>
                  {user && (
                    <ListItemButton>
                      <Link to={"/addspot"} className=" w-full text-center">
                        {" "}
                        Add Tourists Spot
                      </Link>
                    </ListItemButton>
                  )}
                  {user && (
                    <ListItemButton>
                      <Link to={"/mylist"} className=" w-full text-center">
                        {" "}
                        My List
                      </Link>
                    </ListItemButton>
                  )}
                  <div className=" w-full flex flex-col gap-2">
                    <NavLink to={"/signin"}>
                      <Button className=" w-full  !bg-green-500 hover:!bg-green-400 lg:!text-xl !text-white">
                        Log In
                      </Button>
                    </NavLink>
                    <NavLink to={"/signup"}>
                      <Button className=" w-full !bg-green-500 hover:!bg-green-400 text-lg lg:!text-xl !text-white lg:!mt-2">
                        Register
                      </Button>
                    </NavLink>
                  </div>
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
              display: { xs: "none", lg: "flex" },
            }}
          >
            <NavLink to={"/"}>
              {" "}
              <Button
                sx={{
                  my: 2,
                  color: mode === "light" ? "black" : "white",
                  display: "block",
                }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink to={"/allspot"}>
              <Button
                sx={{
                  my: 2,
                  color: mode === "light" ? "black" : "white",
                  display: "block",
                }}
              >
                All Tourists Spot
              </Button>
            </NavLink>
            {user && (
              <NavLink to={"/addspot"}>
                <Button
                  sx={{
                    my: 2,
                    color: mode === "light" ? "black" : "white",
                    display: "block",
                  }}
                >
                  Add Tourists Spot
                </Button>
              </NavLink>
            )}
            {user && (
              <NavLink to={"/mylist"}>
                <Button
                  sx={{
                    my: 2,
                    color: mode === "light" ? "black" : "white",
                    display: "block",
                  }}
                >
                  My List
                </Button>
              </NavLink>
            )}
          </Box>
          <Mode />
          {!user ? (
            <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
              <div className=" hidden lg:block  ">
                <NavLink to={"/signin"}>
                  <Button className="  !bg-green-500 hover:!bg-green-400 lg:!text-xl !text-white">
                    Log In
                  </Button>
                </NavLink>
                <NavLink to={"/signup"}>
                  <Button className=" !bg-green-500 hover:!bg-green-400 text-lg lg:!text-xl !text-white lg:!ml-2">
                    Register
                  </Button>
                </NavLink>
              </div>
            </Box>
          ) : (
            <Box>
              <Tooltip title={displayName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={displayName} src={photoURL} />
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ width: "100%" }}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ width: "100%" }}>Update Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ width: "100%" }} onClick={handleLogout}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
