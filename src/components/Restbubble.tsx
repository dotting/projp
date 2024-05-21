import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import restimages from 'resources/restimage/restimages.json' assert { type: "json" };

function rest_dat(row){
    return {name:row[3],
    call:row[0],
    item:row[4],
    address:row[2]}
}

export default function Restbubble(data, action) {
    const dat = rest_dat(data);
    return (
        <Card >
            <CardActionArea
            //onClick={action}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={restimages[dat.item]}
                    alt="가게 이미지"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {dat.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dat.item} {dat.address}<br/>
                        {dat.call&&(<>☎️{dat.call}</>)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}