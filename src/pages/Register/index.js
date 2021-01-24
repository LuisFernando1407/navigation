import React, { useState, useEffect } from 'react'
import { Dimensions, View, Text, Alert, Modal, TouchableHighlight } from 'react-native'

import { Content, Styles } from '../Register/style'

import EditText from '../../components/EditText'
import Button from '../../components/Button'

const Register = ( { navigation } ) => {
    const { width } = Dimensions.get('window')

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')

    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        navigation.setParams({
            title: 'Cadastro', 
            iconBack: true
        })
    }, [])

    const handleName = (name) => {
        setName(name)
    }
    
    const handleAge = (age) => {
        setAge(age)
    }

    const handleEmail = (email) => {
        setEmail(email)
    }

    const validate = () => {
        if(name.length == 0 || /^\s*$/.test(name)){
            Alert.alert("Nome obrigatório")
            return
        }
        
        if(age.length == 0 || /^\s*$/.test(age)){
            Alert.alert("Idade obrigatório")
            return
        }

        if(email.length == 0 || /^\s*$/.test(email)){
            Alert.alert("Email obrigatório")
            return
        }

        setModalVisible(true)
    }

    return (
        <Content width={(width - 40)}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>

                <View style={Styles.centeredView}>
                <View style={Styles.modalView}>
                    <Text style={Styles.modalTitle}>Perfil</Text>

                    <Text style={Styles.modalText}>Nome: {name}</Text>
                    <Text style={Styles.modalText}>Idade: {age}</Text>
                    <Text style={Styles.modalText}>Email: {email}</Text>

                    <TouchableHighlight    
                        style={{ ...Styles.openButton, backgroundColor: "rgb(86, 0, 193)" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            navigation.goBack()
                        }}>
                        <Text style={Styles.textStyle}>Ir para Home</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </Modal>            

            <Text style={{fontSize: 16, marginBottom: 5}}>Infome seu nome</Text>
            <EditText 
                style={{marginTop: 20}}
                keyboardType="default"
                placeholder="Nome"
                onChangeText={handleName}
                maxLength={36}
                />

            <Text style={{fontSize: 16, marginTop: 20, marginBottom: 5}}>Infome sua idade</Text>
            <EditText 
                placeholder="Idade"
                onChangeText={handleAge}
                maxLength={3}
                />

            <Text style={{fontSize: 16, marginTop: 20, marginBottom: 5}}>Infome seu email</Text>
            <EditText
                keyboardType="email-address" 
                placeholder="Email"
                onChangeText={handleEmail}
                maxLength={36}
                />

            <Button handle={validate} title="OK"/>
        </Content>
    )
}

export default Register