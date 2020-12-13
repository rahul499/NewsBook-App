import React from 'react';
import BlockCard from './cards/BlockCard';

import {useNavigation} from '@react-navigation/native';


function FeaturedNews({item}) {
    const navigation = useNavigation();
    return (
        <BlockCard onPress = {() => navigation.navigate('NewsDetail', {item})}
        item={item} style={{ marginVertical: 15 }} />
    );
}

export default FeaturedNews;