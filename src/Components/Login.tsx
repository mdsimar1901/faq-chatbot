import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login(props: LoginProps): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      props.setIsLoggedIn(true);
    } else {
      console.log('Invalid username or password');
      alert("Wrong User name and Password");
    }
  };

  return (
    <Container sx={styles.container}>
      <Typography variant="h2" sx={styles.title}>
        User Login
      </Typography>
      <Box sx={styles.formContainer}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          sx={styles.input}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          sx={styles.input}
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={styles.button}
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
    fontWeight: "600",
    fontSize: { xs: "28px", sm: "32px", lg: "46px" },
  },
  formContainer: {
    width: { xs: "90%", sm: "70%", md: "50%" },
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  input: {
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#555",
    },
  },
};

export default Login;
