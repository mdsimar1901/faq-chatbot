import React from "react";
import { Box, Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MessageSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        fontSize: "14px",
        width: "150px",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        alignSelf: "flex-start",
        textAlign: "left",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
        color: "white",
        display: "flex",
        gap: "3px",
      }}
    >
      <FaceIcon sx={{ color: "#694D76" }} />
      <Typography
        sx={{
          fontSize: "12px",
          width: "150px",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#694D76",
          color: "white",
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        Typing...
      </Typography>
    </Box>
  );
};

export default MessageSkeleton;
