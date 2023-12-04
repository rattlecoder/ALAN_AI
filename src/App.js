import React, {useEffect, useState, Fragment} from 'react';
import NewsCards from './Components/NewsCards/NewsCards';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import Bot from './Components/Images/bot.png';
import Logo from './Components/Images/logo.png';

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
  const [newsArticles,setNewsArticles] = useState([]);
  const [activeArticle,setActiveArticle] = useState(-1); //  index of current activevarticle
  const [bgCol, setBgCol] = useState('white');

  const changeMode = () => {
    if(bgCol==='white'){
      setBgCol('black');
      return;
    }
    else{
      setBgCol('white');
      return;
    }
    
  };

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command,articles,number}) => {
        if(command === 'newHeadlines'){
          console.log(articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        }
        /*else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle+1);
        }*/
        else if(command === 'changeMode'){
          changeMode();
        }
        else if (command === 'open') {
          var parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];
          parsedNumber = parseInt(parsedNumber);
          console.log('parsed no type ',typeof(parsedNumber),', parsed no ',parsedNumber);
          console.log('article ',article);
          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      }
    })
  },[])

  

  return (
    <div style={{background: bgCol}}>
       <div style={{ marginTop: 0}}>
        <img src={Logo} style={{marginLeft: 4, marginBottom: 10, borderRadius: 16, height: 100}}/>
       </div>
       <div style={{alignItems: 'center'}}>
         <img src={Bot} style={{marginLeft: 430, marginBottom: 40, borderRadius: 16}}/>
       </div>
       <NewsCards articles={newsArticles} />
    </div>
  );
}

export default App;
