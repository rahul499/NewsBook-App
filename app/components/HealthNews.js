import React, {useState, useEffect} from 'react';
import VerticalList from './lists/VerticalList';

const HealthNews = () => {

    const [health, setHealth] = useState([]);
    const API_KEY = "e3f92209028c49569e8851f001254448";
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=8&apiKey=${API_KEY}`;
   
    useEffect(()=>{
      fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.articles;
      })
      .then( news  => {
        news.push({
          "type": "viewmore",
          "category": "health"
        })
        setHealth(news);
      })
      .catch( error => {
        console.error(error);
      });
  
    } , []);

    return (
       <VerticalList title="Health News" data={health} />
    )
}


export default HealthNews;