
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, ScrollView, Text, Dimensions, Linking } from 'react-native'

const {width, height} = Dimensions.get('window');

export default function NewsDetail({route}) {

    const { title, description, url, urlToImage, content, source, author} = route.params.item;

    return (

        <ScrollView style = {styles.container}>
            {
                urlToImage ?
                  <Image style={styles.image}
                  source = {{ uri: urlToImage}} /> :
                  <Image style={styles.image}
                  source={require('../../../assets/notavailable.jpg')} /> 
             }
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                {
                    author? <Text style={styles.author}>{author}</Text> :
                    ''
                }
                <Text style={styles.source} onPress={() => Linking.openURL(url)}>
                    {
                    source?
                    'Source: ' + source.name :
                    'Source Unavailable'
                    }
                </Text>
                <Text  style={styles.content}>
                {
                    description?
                    description + " " + content :
                    'No Content Available'

                }
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
       width:  width,
       height: height/3
    },
    contentContainer: {
        padding: 10
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5
    },
    content: {
       fontSize: 18,
       color: '4e4d4d'
    },
    source: {
        fontSize: 15,
        textAlign: 'right',
        marginBottom: 10
    },
    author: {
        fontSize: 15,
        textAlign: 'right',
        marginBottom: 1
    }

})
