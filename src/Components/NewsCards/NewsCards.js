import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grow,Grid,Typography,Box} from '@material-ui/core';
import Home from '../Home/Home';

import useStyles from './styles.js';

const infoCards = [
    //{ color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({articles, activeArticle}) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      
      <Grid container spacing={2}>
         {infoCards.map((infoCard,idx) => (
            <Grid item xs={4} >
              <Home backgroundColor={infoCard.color} title={infoCard.title} val={infoCard.title.split(' ')[2]} info={infoCard.info} text={infoCard.text} />
            </Grid>
         ))}
      </Grid>
    
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
         {articles.map((article,idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} >
              <NewsCard article={article} idx={idx} key={idx}  />
            </Grid>
         ))}
      </Grid>
    </Grow>
  )
}

export default NewsCards
