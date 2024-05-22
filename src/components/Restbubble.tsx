import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import restimages from 'resources/restimage/restimages.json' assert { type: "json" };


export default function Restbubble(input, action) {
    const data = input.input;
    //console.log(data)
    return (
        <Card variant="outlined">
            <CardActionArea
            //onClick={click(data)}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={restimages[data.item]}
                    alt="가게 이미지"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.item} {data.address}<br/>
                        {data.call&&(<>☎️{data.call}</>)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}