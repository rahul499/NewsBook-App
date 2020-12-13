import React from 'react';
import {  View } from 'react-native';
import Title from '../common/Title';
import FlatCard from '../cards/FlatCard';
import {useNavigation} from '@react-navigation/native';


function VerticalList( {title, data} ) {
    const navigation = useNavigation();
    return (
        <View>
            <Title size={20}>{title}</Title>

            <View style={{marginVertical: 15}}>
              {data.map(item => (
                  <FlatCard 
                  onPress={() => navigation.push('NewsDetail',  {item} )}
                  item={item} key={item.url}
                  data={data}
                 />
              ))}
            </View>
        </View>
    )
}

export default VerticalList;
