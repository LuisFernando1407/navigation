import React, { useEffect } from 'react'

import { Text, Dimensions } from 'react-native'

import { View } from '../About/style'
import Button from '../../components/Button'

const Home = ( { navigation } ) => {
    const { width } = Dimensions.get('window')

    useEffect(() => {
        navigation.setParams({'title': 'Home'})
    }, [])

    return (
        <View width={(width - 40)}>
             <Button handle={() => navigation.navigate('RegisterScreen')} title="Cadastro"/>
             <Button handle={() => navigation.navigate('ImcScreen')} title="IMC"/>
            <Button handle={() => navigation.navigate('AboutScreen')} title="Sobre"/>
        </View>
    )
}

export default Home