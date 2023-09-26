import React, { useState, useEffect, useRef } from "react";
import { Paper, Button, Typography, Box, Input } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import axios from "axios";
import Messages from "./Message";
import SendIcon from "@mui/icons-material/Send";
import MessageView from "./MessageView";


interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [messages, setMessages] = useState<{ text: string; user: boolean }[]>([
    {
      text: `Say "Hi"`,
      user: false,
    },
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [customInput, setCustomInput] = useState<string>("");
  const messagesBoxRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    const customSendMessage = () => {
      if (customInput.trim() !== "") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: customInput, user: true },
        ]);
        setCustomInput("");

        // Send user input to the backend
        setIsLoading(true);

        setTimeout(() => {
          axios
            .post("http://127.0.0.1:5000/predict", {
             text: customInput,
            })
            .then((response) => {
              console.log("Response from backend:", response.data);
              console.log(response.data,"mk")
              const botResponse = {
                text: response.data,
                user: false,
              };
              setMessages((prevMessages) => [...prevMessages, botResponse]);
            });
          setTimeout(() => {
            setIsLoading(false);
          }, 900);
        }, 1000);
      }
    };
    customSendMessage();
  }, [customInput]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, user: true },
      ]);
      setInputText("");

      // Send user input to the backend
      setIsLoading(true);

      setTimeout(() => {
        axios
          .post("http://127.0.0.1:5000/predict", {
            text: inputText,
          })
          .then((response) => {
            console.log("Response from backend:", response.data);
            const botResponse = {
              text: response.data.answer,
              user: false,
            };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
          });
        setTimeout(() => {
          setIsLoading(false);
        }, 900);
      }, 1000);
    }
  };

  useEffect(() => {
    if (messagesBoxRef.current) {
      messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Paper
      elevation={12}
      sx={{
        width: { xs: "87vw", lg: "450px" },
        minHeight: "500px",
        padding: 0,
        borderRadius: "10px",
        background: "linear-gradient(to right, #FFFFFF, #FFFFFF)", // Silky white gradient
        position: "relative",
        outline: "none",
        border: "none",
        color: "#000", // Text color
      }}
    >
      <Typography
        variant="h6"
        sx={{
          padding: "10px",
          color: "#000", // Text color
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "0",
        }}
        gutterBottom
      >
        <SupportAgentIcon sx={{ fontSize: "30px" }} /> Chat Window
      </Typography>
      <Box
        ref={messagesBoxRef}
        sx={{
          minHeight: "344px",
          maxHeight: "344px",
          overflowY: "auto",
          backgroundColor: "#FFF", 
          padding: "16px",
          display: "flex",
          flexDirection: "column",

          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#8C3F67",
            borderRadius: 0,
          },
        }}
      >
        <Messages messages={messages} setCustomInput={setCustomInput} />
        {isLoading && <MessageView />} {/* Show skeleton if loading */}
      </Box>

      <form
        style={{ display: "flex", alignItems: "center" }}
        onSubmit={handleSendMessage}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            paddingBottom: "10px",
            paddingTop: "10px",
            bottom: 0,
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Input
            disableUnderline
            sx={{
              flex: "0.8",
              marginRight: "8px",
              backgroundColor: "#FFF", 
              borderRadius: "10px",
              border: "none",
              outline: "none",
              height: "50px",
              padding: "10px",
              fontSize: "14px",
              color: "#000", // Text color
              "&:hover": {
                borderBottom: "none",
              },
              "&:focus": {
                borderBottom: "none",
                outline: "none",
              },
            }}
            name={inputText}
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <Button
            sx={{
              background: "transparent",
              color: "black", // Text color
              fontSize: "16px",
              display: "flex",
              gap: "10px",
            }}
            type="submit"
          >
            Send <SendIcon />
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Chatbot;
