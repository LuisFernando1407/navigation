import React, { useEffect } from 'react'

import { Dimensions, Text } from 'react-native'

import { View } from '../../Imc/Result/style'
import Message from '../../../components/Message'

const Result = ( { navigation } ) => {
    const { width } = Dimensions.get('window')

    useEffect(() => {
        navigation.setParams({title: 'Resultado IMC', iconBack: true})
    }, [])

    const { params } = navigation.state 
    const title = `Seu IMC é: ${params.result}`

    return (
        <View width={(width - 40)}>
            <Message
                color={params.color} 
                title={title}
                message={params.text}
            />
        </View>
    )
}

export default Result