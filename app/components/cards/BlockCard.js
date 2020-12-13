import React from 'react';
import { Image, StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import Title from '../common/Title';
import {useNavigation} from '@react-navigation/native';


const BlockCard = ({ style, imageStyle, item, onPress, data }) => {

    const { urlToImage, title } = item;
    const navigation = useNavigation();
    const onPressMore = () => navigation.push('NewsList',  {data} )

        if(item.type === 'viewmore')
        {
            return (
              <TouchableWithoutFeedback onPress = {onPressMore} >
              <View style = {[styles.readcontainer, style]}>
                 <Text style={styles.readmore}>SHOW MORE</Text> 
              </View>
              </TouchableWithoutFeedback>
            );
        }
        else {
            return (
                <TouchableWithoutFeedback onPress = {onPress} >
                <View style = {[styles.container, style]}>
                    {
                        urlToImage ?
                        <Image style = {[styles.image, imageStyle]} 
                        source={{uri: urlToImage}} /> :
                        <Image style = {[styles.image, imageStyle]} 
                        source={require('../../../assets/notavailable.jpg')}  /> 
                    }
                    <View style = {styles.contentContainer}>
                        <Title numberOfLines={3} > {title} </Title>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            )
        } 
    
}


const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: 300,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: '#ffff',
   },
   image: {
       width: '100%',
       height: 200,
   },
   contentContainer: {
       padding: 5
   },
   readmore: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Cursive',
    color: 'black',

   },
   readcontainer: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff'
 }
});


export default BlockCard;
