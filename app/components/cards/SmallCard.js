
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import BlockCard from './BlockCard';

const {width} = Dimensions.get('window');

const SmallCard = ({ item, onPress, data }) => {

    return (
        <BlockCard 
        onPress={onPress}
        style = { styles.container } 
        data={data}
        item={item}
        imageStyle = {styles.image} />
    )
}


const styles = StyleSheet.create({
    container: {
       width: width/2,
       marginRight: 15,
       height: 200
    },
    image: {
        height: 120
    }
})


export default SmallCard;