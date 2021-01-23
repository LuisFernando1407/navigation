import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Header from '../src/components/Header'
import Home from '../src/pages/Home'
import About from '../src/pages/About'

const Router = createStackNavigator({
        HomeScreen: Home,
        AboutScreen: About
    }, {
        headerMode: 'screen',
        defaultNavigationOptions: ({ navigation }) => ({
            header: <Header 
                title={navigation.getParam('title', 'Content-Title')} 
                navigation={navigation}
                iconBackIsVisible={navigation.getParam('iconBack', false)}
            />
        }),
    }
)

export default createAppContainer(Router)