import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Assignment, Folder } from '@mui/icons-material';
import { Divider, IconButton } from '@mui/material';

export const ClassroomCard = ({classroom}) => {
  return (
    <Card sx={{height:"100%", minHeight:"300px"}}>
      <CardContent sx={{background:'teal',height:"30%"}}>
        <Typography gutterBottom variant="h5" component="div">
          {classroom.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {classroom.part?classroom.part:' '}
        </Typography>
      </CardContent>
      <CardContent sx={{height:"30%"}} >
        <Typography gutterBottom variant="body2" color="text.secondary">
          {classroom.description}
        </Typography>
      </CardContent>
      <Divider/>
      <CardActions sx={{display:'flex', justifyContent:'flex-end'}}>
        <IconButton size="small"><Assignment/></IconButton>
        <IconButton size="small"><Folder/></IconButton>
      </CardActions>
    </Card>
  );
}
