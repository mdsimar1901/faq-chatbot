// Messages.tsx

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import ResponseBox from "./ResponseBox";

interface Message {
  text: string;
  user: boolean;
}

interface MessagesProps {
  messages: Message[];
  setCustomInput: (text: string) => void;
}

const Messages: React.FC<MessagesProps> = ({ messages, setCustomInput }) => {
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredMessageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredMessageIndex(-1); 
  };

  const handleClick = (index: number) => {
    if (hoveredMessageIndex === index) {
      setHoveredMessageIndex(-1); 
    } else {
      setHoveredMessageIndex(index);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: message.user ? 'row-reverse' : 'row',
            gap: '3px',
            marginTop: '10px',
            marginBottom: '20px',
            position: 'relative', // Add position relative to this container
          }}
        >
          {!message.user && <FaceIcon sx={{ color: '#694D76' }} />}

          <Typography
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            sx={{
              fontSize: '12px',
              width: 'fit-content',
              maxWidth: '260px',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: message.user ? '#f0f0f0' : '#694D76',
              color: message.user ? 'black' : 'white',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              cursor: message.user ? 'auto' : 'pointer', 
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {message.text}
            {message.user
              ? null
              : hoveredMessageIndex === index && (
                  <ResponseBox setCustomInput={setCustomInput} />
                )}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
