import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface ResponseBoxProps {
  setCustomInput: (text: string) => void;
}

const ResponseBox: React.FC<ResponseBoxProps & BoxProps> = ({ setCustomInput, ...props }) => {
  return (
    <Box
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
      sx={{
        position: 'absolute',
        top: '-32px',
        right: '0',
        backgroundColor: 'white',
        height: '30px',
        width: '60px',
        borderRadius: '5px',
        ...props.sx, 
      }}
    >
    </Box>
  );
};

export default ResponseBox;






