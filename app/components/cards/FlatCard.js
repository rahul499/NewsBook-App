import React from 'react';
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Title from '../common/Title';
import {useNavigation} from '@react-navigation/native';


const FlatCard = ({ item, onPress, data }) => {
    const { urlToImage, title } = item;
    const navigation = useNavigation();
    const onPressMore = () => navigation.push('NewsList',  {data} )

    if(item.type === 'viewmore')
    {
        return (
         <TouchableWithoutFeedback onPress = {onPressMore} >
          <View style = {styles.readcontainer}>
             <Text style={styles.readmore}>SHOW MORE</Text> 
          </View>
          </TouchableWithoutFeedback>
        );
    }
    else {
    return (
        <TouchableWithoutFeedback onPress = {onPress} >
        <View style = {styles.container}>
            {
                urlToImage ?
                <Image style = {styles.image} 
                source={{uri: urlToImage}} /> :
                <Image style = {styles.image} 
                source={require('../../../assets/notavailable.jpg')}  /> 
            }
            <View style = {styles.contentContainer}>
                <Title numberOfLines={3}> {title} </Title>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
    }
}


const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 10,
      height: 80
   },
   image: {
      flex: 0.35,
      height: '100%'
   },
   contentContainer: {
      flex: 0.65,
      paddingHorizontal: 5
   },
   readcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
   },
   readmore: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Cursive',
    color: 'black'
   }

});


export default FlatCard;
