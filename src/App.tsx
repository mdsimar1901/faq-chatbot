import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Slide,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Chatbot from "./Components/Chatbot";

function App(): JSX.Element {
  const [isBotActivated, setIsBotActivated] = useState<boolean>(false);

  const toggleChatbot = (): void => {
    setIsBotActivated((prev: boolean) => !prev);
  };

  return (
    <Container className="flex flex-col min-w-full min-h-screen justify-center items-center bg-gray-100 overflow-hidden">
      <Typography className="text-center mb-8 text-pink-700 font-semibold text-2xl md:text-3xl lg:text-4xl">
        Welcome to the Chatbot App!
      </Typography>
      <Typography className="text-center mb-8 w-80 md:w-1/2 font-normal text-lg lg:text-xl">
        TThe ChatBot is Training.
      </Typography>
      <Slide
        direction={isBotActivated ? "up" : "down"}
        in={isBotActivated}
        mountOnEnter
        unmountOnExit
        {...(isBotActivated ? { timeout: 10000 } : {})}
      >
        <Box className="absolute right-4 md:right-16 bottom-16 lg:bottom-36">
          {isBotActivated && <Chatbot />}
        </Box>
      </Slide>

      <Button
        variant="contained"
        onClick={toggleChatbot}
        className="h-16 w-16 md:h-20 md:w-20 rounded-full fixed bottom-16 right-4 bg-purple-600 hover:bg-purple-800"
      >
        {isBotActivated ? <CloseIcon /> : <AddIcon />}
      </Button>
    </Container>
  );
}

export default App;