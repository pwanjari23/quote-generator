import { Box, Button, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Background from './Image/Background.webp';
import { MdOutlineRefresh } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState("It takes courage to grow up and become who you really are.");

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching random quote:', error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(quote);
  };

  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: '100vh',
        }}
      >
        <Box
          height={"180px"}
          maxHeight={"180px"}
          width={"450px"}
          maxWidth={"450px"}
          textAlign="center"
          bgcolor="rgba(255, 255, 255, 0.2)"
          color="black"
          p={2}
          borderRadius={8}
          overflow="hidden" 
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          
        >
          <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px' }}>Get free QUOTES here...</Typography>
          <Typography sx={{ fontSize: 18, margin: '0 auto', maxWidth: '90%', overflowWrap: 'break-word' }}>{quote}</Typography>
          <Box>
            <Button aria-label="refresh" onClick={fetchRandomQuote} style={{ color: 'black' }}>
              <MdOutlineRefresh fontSize={20} />
            </Button>
            <Button aria-label="copy" onClick={handleCopyToClipboard} style={{ color: 'black', marginLeft: 8 }}>
              <FaCopy fontSize={18} />
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default Quote;
