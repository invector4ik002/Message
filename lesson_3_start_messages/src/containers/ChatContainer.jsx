import React, { Component } from 'react';

import { Chat } from '../components/Chat/Chat'

const ROBOT_NAME = 'Robot';
export class ChatContainer extends Component {
    state = {
        messages: [
            { name: "Ivan", content: "Hello!" },
            { name: "Oleg", content: "Hi, how are you?" },
            { name: "Ivan", content: "I am well" },
        ]
    }
    componentDidMount() {
        const {messages} = this.state;
        const lastMassage = messages[messages.length -1];
        if(lastMassage.name == ROBOT_NAME) {
            console.log("Robot is not out")
        } else {
            setTimeout(() => this.handleSendMessage({ name: ROBOT_NAME, content: 'Hi im Robot' }), 2000)
        }
    }
    handleSendMessage = (message) => {
        this.setState((state) => ({messages: [...state.messages, message]}))
    }
    render() {
        const { messages } = this.state;
        return <Chat {...{ messages, onSendMessage: this.handleSendMessage}}/>
    }
};
compo