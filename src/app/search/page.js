'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import { IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useSearchParams } from 'next/navigation';
import jsonData from '../../resources/projdb_comp.json'


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
          <Card key={jsonData}{...jsonData} />
        ))}
      </>)
  }



export default function search() {
    const searchParams = useSearchParams()
 
    const keyword = searchParams.get('search')
   
    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'

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
          <Box><Input>
          </Input>
            <IconButton aria-label="search">
              <SearchIcon />
            </IconButton>
            <IconButton aria-label='chat'>
              <ChatBubbleIcon />
            </IconButton>
          </Box>
          <ProTip />
        </Box>
      </Container>
    );
  }
