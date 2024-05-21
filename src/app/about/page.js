import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import jsonData from '../../resources/projdb_comp.json'
import Restbubble from '../../components/Restbubble';

function Card(key=[]) {   
    console.log('key');
    
    return (
      <div className='cardContainer'>
        <h2>상호명   {key[3]}</h2>
        <h2>품목 {key[4]}</h2>
        <h2>전화번호 {key[0]}</h2>
        <h2>네이버 url {key[7]}</h2>
      </div>
    );
  }
  

  function SearchedList() {
    const keyword = "고기"; //검색 키워드
  
    const lists = jsonData.rows.filter((jsonData) => jsonData[3].includes(keyword)||jsonData[4].includes(keyword));//검색 조건
    
    return(
      <>
      <h1>검색 예시</h1>
        {lists.map(jsonData => (
          <Restbubble data={jsonData}{...jsonData} />
        ))}
      </>)
  }

export default function About() {
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
          검색결과창
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page 
          </Button>
          {SearchedList()}
        </Box>
      </Box>
    </Container>
  );          
}
