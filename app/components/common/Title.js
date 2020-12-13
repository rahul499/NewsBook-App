import React from 'react'
import { Text } from 'react-native'

const Title = ({ children, numberOfLines, size = 15 }) => {
    return (
            <Text numberOfLines={numberOfLines}
            style = {{ fontWeight: 'bold', fontSize: size }} >
                {children}
            </Text>
    )
}


export default Title;