'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import  Searchbar  from 'components/searchbar';
import jsonData from 'resources/projdb_comp.json'
import { useParams } from "next/navigation";
import Restbubble from 'components/Restbubble';

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
  
    const lists = jsonData.rows.filter((jsonData) => (jsonData[3] as string).includes(keyword)||(jsonData[4] as string).includes(keyword));//검색 조건
    
    return(
      <>
      <h1>검색 예시</h1>
        {lists.map(data => (
          <Restbubble data={data}{...data} />
        ))}
      </>)
  }



export default function search() {
    const keyword = useParams()

    return (
      <Container maxWidth="lg">
        
      <Searchbar key={keyword}/>
      </Container>
    );
  }
