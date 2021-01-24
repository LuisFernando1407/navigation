import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Header from '../src/components/Header'

import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Register from '../src/pages/Register'
import Imc from '../src/pages/Imc'
import Result from '../src/pages/Imc/Result'

const Router = createStackNavigator({
        HomeScreen: Home,
        AboutScreen: About,
        RegisterScreen: Register,
        ImcScreen: Imc,
        ResultScreen: Result
    }, {
        headerMode: 'screen',
        defaultNavigationOptions: ({ navigation }) => ({
            header: <Header 
                title={navigation.getParam('title', 'Navigation App')} 
                navigation={navigation}
                iconBackIsVisible={navigation.getParam('iconBack', false)}
            />
        }),
    }
)

export default createAppContainer(Router)