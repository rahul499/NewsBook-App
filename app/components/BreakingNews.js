import React, {useEffect, useState} from 'react'
import HorizontalList from './lists/HorizontalList';

function BreakingNews() {
    
    const [breakingtop, setBreakingTop] = useState([]);
    const API_KEY = "e3f92209028c49569e8851f001254448";
    const URL = `https://newsapi.org/v2/top-headlines?country=in&pageSize=15&apiKey=${API_KEY}`;
   
    useEffect(()=>{
      fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.articles;
      })
      .then( news  => {
        news.push({
          "type": "viewmore",
          "category": "breaking"
        })
        setBreakingTop(news);
      })
      .catch( error => {
        console.error(error);
      });
    } , []);

    return (
        <HorizontalList title="Breaking News" data={breakingtop} />
    )
}

export default BreakingNews;
