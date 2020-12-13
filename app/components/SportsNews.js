import React, {useState, useEffect} from 'react'
import HorizontalList from './lists/HorizontalList';

function SportsNews() {

    const [sports, setSports] = useState([]);
    const API_KEY = "e3f92209028c49569e8851f001254448";
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=15&apiKey=${API_KEY}`;
   
    useEffect(()=>{
      fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.articles;
      })
      .then( news  => {
        news.push({
          "type": "viewmore",
          "category": "sports"
        })
        setSports(news);
      })
      .catch( error => {
        console.error(error);
      });
  
    } , []);

    return (
        <HorizontalList title="Sports News" data={sports} />
    )
}

export default SportsNews;