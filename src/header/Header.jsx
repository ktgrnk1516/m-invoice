import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.scss";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "../../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  

  const handleLogin = () => {
    //firebaseを使ってグーグルでサインインする
    signInWithPopup(auth, provider);
  
  };

  const handleLogout = () => {
    //firebaseを使ってグーグルでサインアウトする
    auth.signOut();
  };

  return (
    <Box className={styles.box}>
      <AppBar position="static" className={styles.app_bar}>
        <Toolbar className={styles.tool_bar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className={styles.text}
          >
            M invoice
          </Typography>

          <Button color="inherit" onClick={user ? handleLogout : handleLogin}>
            {user ? "LogOut" : "LogIn"}
          </Button>
          {user ? (
            <>
              <img src="" alt="" />
            </>
          ) : (
            <>
              <img src="" alt="" />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
