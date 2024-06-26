import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © P의 여행'}
      <MuiLink color="inherit" href="https://forp.com/">
        site
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
