import * as React from 'react';

import Box from '@mui/material/Box';
import { IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
//import Link from '@next/link';


export default function Searchbar(key) {

  const [keyword, setKeyword] = React.useState("");

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };
  return (
    <Box>
      <Input
        type="text"
        name="keyword"
        value={keyword}
        defaultValue={key}
        onChange={handleInputChange} />
      <IconButton aria-label="search" href={'/search/' + keyword} >

        <SearchIcon />
      </IconButton>
      <IconButton aria-label='chat'>
        <ChatBubbleIcon />
      </IconButton>
    </Box>
  );
}