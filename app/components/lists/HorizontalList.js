import React from 'react';
import { FlatList, View } from 'react-native';
import Title from '../common/Title';
import SmallCard from '../cards/SmallCard';
import {useNavigation} from '@react-navigation/native';


function HorizontalList( {title, data} ) {
    const navigation = useNavigation();
    return (
        <div>
            <Title size={20}>{title}</Title>
            <View style={{marginBottom: 20}}>
            <FlatList 
            data={data} 
            keyExtractor = {item => item.url} 
            horizontal 
            showsHorizontalScrollIndicator={false}
            renderItem={ ({ item }) => <SmallCard 
             onPress={() => navigation.push('NewsDetail', { item })}
             item={item} data={data} /> } 
            />
            </View>
        </div>
    )
}

export default HorizontalList;
