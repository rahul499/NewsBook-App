import React from 'react'
import { Text } from 'react-native'

const SubTitle = ({ children, numberOfLines, size = 12 }) => {
    return (
            <Text numberOfLines={numberOfLines}
            style = {{ fontSize: size }} >
                {children}
            </Text>
    )
}




export default SubTitle;