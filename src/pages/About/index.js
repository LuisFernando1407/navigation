import React, { useEffect } from 'react'

import { Text, Dimensions } from 'react-native'
import { View } from '../About/style'

const About = ( { navigation } ) => {
    const { width } = Dimensions.get('window')

    useEffect(() => {
        navigation.setParams({
            title: 'Sobre', 
            iconBack: true
        })
    }, [])

    return (
        <View width={(width - 40)}>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </View>
    )
}

export default About