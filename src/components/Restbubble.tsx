import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import restimages from 'resources/restimage/restimages.json' assert { type: "json" };
import ModalAbout from 'components/ModalAbout';

export default function Restbubble(rest, action = null ) {
    const [showModal, setShowModal] = React.useState(false);
    const data = rest.rest;
    const clickModal = () => {setShowModal(!showModal)}

    return (
        <Card variant="outlined">
            <CardActionArea
            onClick={clickModal}
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
                {showModal && <ModalAbout data={data} clickModal={clickModal}/>}
            </CardActionArea>
            
            
        </Card>        
    );
}