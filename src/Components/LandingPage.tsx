import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Chatbot from "./Chatbot";
import ChatIcon from "@mui/icons-material/Chat";

const LandingPage: React.FC = () => {
  const [isBotActivated, setIsBotActivated] = useState<boolean>(false);

  const toggleChatbot = (): void => {
    setIsBotActivated((prev) => !prev);
  };

  return (
    <Container sx={styles.container}>
      <Typography variant="h1" sx={styles.title}>
        AI Powered ChatBot 🚀
      </Typography>
      <Typography variant="h6" sx={styles.description}>
        Click on the below 🗨️icon to continue.
      </Typography>
      
      <a href="https://github.com/mdsimar1901/faq-chatbot.git" rel="noopener">Frontend GitHub Link 📄</a>
      <a href="https://github.com/mdsimar1901/faq-chatbot-backend.git" rel="noopener">Backend Github Link</a>
      <Slide
        direction={isBotActivated ? "up" : "down"}
        in={isBotActivated}
        mountOnEnter
        unmountOnExit
        {...(isBotActivated ? { timeout: 1000 } : {})}
      >
        <Box sx={styles.chatbotContainer}>
          {isBotActivated && <Chatbot />}
        </Box>
      </Slide>

      <Button
        variant="contained"
        onClick={toggleChatbot}
        sx={styles.button}
      >
        {isBotActivated ? <CloseIcon /> : <ChatIcon />}
      </Button>
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
    backgroundColor: "#fff", // Updated to silky white
    overflow: "hidden",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333", 
    fontWeight: "600",
    fontSize: { xs: "28px", sm: "32px", lg: "46px" },
  },
  description: {
    textAlign: "center",
    marginBottom: "20px",
    width: { sm: "80%", lg: "50%" },
    fontWeight: "normal",
    fontSize: { xs: "16px", sm: "20px", lg: "20px" },
    color: "#555", 
  },
  chatbotContainer: {
    position: "absolute",
    right: "50px",
    bottom: { lg: "85px" },
  },
  button: {
    height: "40px",
    width: "50px",
    borderRadius: "40px",
    position: "fixed",
    bottom: { xs: "15px", lg: "16px" },
    right: "25px",
    backgroundColor: "#333",
    ":hover": {
      backgroundColor: "#555", 
    },
  },
};

export default LandingPage;
