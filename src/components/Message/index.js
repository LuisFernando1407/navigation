import React from 'react'
import { View, Text, Title } from './style'

export default class Message extends React.Component {

    render() {
        return (
            <View borderColor={this.props.color}>
                <Title>{this.props.title}</Title>
                <Text color={this.props.color}>{this.props.message}</Text>
            </View>
        )
    }
}