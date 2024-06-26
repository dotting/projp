"use client"
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '../components/ProTip';
import Searchbar from '../components/searchbar'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          <center>P의 여행<br></br>
            당신이 원하는것, 당신이 몰라도 바로</center>
        </Typography>
        <Searchbar/>
        <ProTip />
      </Box>
    </Container>
  );
}
