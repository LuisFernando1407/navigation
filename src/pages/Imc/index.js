import React, { useState, useEffect } from 'react'
import { Dimensions, Text, Alert } from 'react-native'

import { View } from '../Imc/style'

import EditText from '../../components/EditText'
import Button from '../../components/Button'

const Imc = ( { navigation } ) => {
    const { width } = Dimensions.get('window')

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [message, setMessage] = useState({
        result: 0,
        text: '', 
        color: ''
    })

    useEffect(() => {
        navigation.setParams({title: 'IMC', iconBack: true})
    }, [])

    const handleWeight = (weight) => {
        setWeight(weight.replace(",", "."))
    }
    
    const handleHeight = (height) => {
        setHeight(height.replace(",", "."))
    }

    const getSituation = () => {
        let result = (weight / (height * height)).toFixed(2)
    
        if(!isFinite(result)) {
            Alert.alert("Operação inválida")
            return
        }

        /**
         * The correct thing would be not to have multiple ifs nested
         */
        if(result < 17) {
            setMessage({
                result,
                text: "Muito abaixo do peso",
                color: "#CE2400"
            })     
        }

        if(result >= 17 && result <= 18.49) {
            setMessage({
                result,
                text: "Abaixo do peso",
                color: "#CE2400"
            })      
        }

        if(result >= 18.50 && result <= 24.99) {
            setMessage({
                result,
                text: "Peso normal",
                color: "#0056CB"
            })      
        }

        if(result >= 25 && result <= 29.99) {
            setMessage({
                result,
                text: "Acima do peso",
                color: "#CE2400"
            })       
        }

        if(result >= 30 && result <= 34.99) {
            setMessage({
                text: "Obesidade I",
                color: "#CE2400"
            })   
        }

        if(result >= 35 && result <= 39.99) {
            setMessage({
                result,
                text: "Obesidade II (severa)",
                color: "#CE2400"
            })     
        }

        if(result > 40) {
            setMessage({
                result,
                text: "Obesidade III (mórbida)",
                color: "#CE2400"
            })      
        }

        navigation.navigate('ResultScreen', message)
    }

    return (
        <View width={(width - 40)}>

            <Text style={{fontSize: 16, marginBottom: 5}}>Infome o peso em Kg</Text>
            <EditText 
                style={{marginTop: 20}}
                placeholder="Peso (Kg)"
                onChangeText={handleWeight}
                maxLength={3}
                />

            <Text style={{fontSize: 16, marginTop: 20, marginBottom: 5}}>Infome a altura em cm</Text>
            <EditText 
                placeholder="Altura (cm)"
                onChangeText={handleHeight}
                />

    
            <Text style={{fontSize: 16, marginTop: 20}} >Preencha os dados do formulário acima para calcular seu IMC 😁</Text>
                
            <Button handle={getSituation} title="Calcular"/>

        </View>
    )
}

export default Imc