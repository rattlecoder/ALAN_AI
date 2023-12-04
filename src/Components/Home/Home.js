import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Home = ({backgroundColor,title,val,info,text}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{backgroundColor: backgroundColor, color: 'white', height: '475px', width: '440px'}}>
      <CardActionArea>
         <div style={{marginTop: 25, textAlign: 'center', fontSize: '30px'}}>
           {title}
         </div>
           <div style={{marginTop: 30, textAlign: 'center', fontSize: '30px'}}><strong>{val}:</strong></div>
           <CardContent>
           <div style={{marginTop: 0, textAlign: 'center', fontSize: '20px'}}>{info}</div> 
           <div style={{marginTop: 100, textAlign: 'center', fontSize: '20px'}}><strong>Try Saying</strong></div>
           <div style={{marginTop: 5, textAlign: 'center', fontSize: '20px'}}>{text}</div>  
           </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Home
