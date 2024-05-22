'use client';
import * as React from 'react';
import Container from '@mui/material/Container';


import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSearchParams } from "next/navigation";
import jsonData from 'resources/transformed_data.json';
import restimages from 'resources/restimage/restimages.json' assert { type: "json" };
import Grid from "@mui/material/Unstable_Grid2";

import { SearchModalBox, SearchModalContent } from 'app/style/modal'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function restData() {
  const keyword = useSearchParams().get('restname');
  return (jsonData.filter((jsonData) => jsonData.name.includes(keyword))[0]);
}

export default function ModalAbout(data = null, clickModal=null) {
  let rest = data;
  if (data===null) {
    rest=restData();
  }
  else{
    rest=data.data;
  }
  const {clicker}=clickModal;
  console.log(rest)
  return (
    <SearchModalBox onClick={clicker}>
      <SearchModalContent onClick={(e) => e.stopPropagation()}>
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
            <CardMedia
              component="img"
              height="140"
              image={restimages[rest.item]}
              alt="가게 이미지"
            />
            <CardContent>
              <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
                {rest.name}
              </Typography>
            </CardContent>

            <Grid container spacing={2}>
              <Grid xs={24}>
                <Item>{rest.item} {rest.address}</Item>
              </Grid>
              {rest.call && (<Grid xs={12}>
                <Item>{rest.call && (<>☎️{rest.call}</>)}</Item>
              </Grid>)}
            </Grid>
            </Box>
        </Container>
      </SearchModalContent>
    </SearchModalBox >
  );
}
