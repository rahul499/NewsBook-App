
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import FlatCard from '../cards/FlatCard';
import {useNavigation} from '@react-navigation/native';


const NewsList = ({route}) => {

    const [newsList, setNewsList] = useState([]);
    const navigation = useNavigation();
    
    var URL = '';
    const API_KEY = "e3f92209028c49569e8851f001254448";
    const field = route.params.data[route.params.data.length - 1].category;
    if(field === 'breaking')
    URL = `https://newsapi.org/v2/top-headlines?country=in&pageSize=50&apiKey=${API_KEY}`;
    else if(field === 'entertainment')
    URL = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=50&apiKey=${API_KEY}`;
    else if(field === 'health')
    URL = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=50&apiKey=${API_KEY}`;
    else if(field === 'sports')
    URL = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=50&apiKey=${API_KEY}`;
    else if(field === 'technology')
    URL = `https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=50&apiKey=${API_KEY}`;
   
    useEffect(()=>{
        fetch(URL)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson.articles;
        })
        .then( news  => {
          setNewsList(news);
        })
        .catch( error => {
          console.error(error);
        });
      } , []);

   
    return (
        <View>
        <View style={styles.headerContainer}>
            <Text style={styles.categoryTitle}>{field + ' NEWS'}</Text>
        </View>
        <View style={{marginVertical: 15}}>
        {newsList.map(item => (
            <FlatCard 
            onPress={() => navigation.push('NewsDetail',  {item} )}
            item={item} key={item.url}
           />
        ))}
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#4e4d4d'
    },
    categoryTitle: {
       fontSize: 20,
       fontWeit: 'bold',
       textTransform: 'uppercase',
       color: 'white'
    }
})


export default NewsList
