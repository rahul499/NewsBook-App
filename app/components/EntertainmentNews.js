import React,{useEffect, useState} from 'react';
import VerticalList from './lists/VerticalList';

const EntertainmentNews = () => {

    const [entertainment, setEntertainment] = useState([]);
    const API_KEY = "e3f92209028c49569e8851f001254448";
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=10&apiKey=${API_KEY}`;
   
    useEffect(()=>{
      fetch(URL)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.articles;
      })
      .then( news  => {
        news.push({
          "type": "viewmore",
          "category": "entertainment"
        })
        setEntertainment(news);
      })
      .catch( error => {
        console.error(error);
      });
  
    } , []);

    return (
       <VerticalList title="Entertainment News" data={entertainment} />
    )
}


export default EntertainmentNews;