import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat'

const ROBOT_NAME = 'Robot';
export class ChatContainer extends Component {
    state = {
        messages: [
            {name:'Ivan', content:'Hi!'},
            {name:'Michael', content:'Hi, how are you?'},
            {name:'Ivan', content:'im well'}
        ],
    }
    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length -1];
        if(lastMessage.name !== ROBOT_NAME) {
            setTimeout(() => (this.handleSendMessage({name: ROBOT_NAME, content: 'im Robot'})), 2000)    
        }
    }
    handleSendMessage = (message) => {
        // console.log(message)
        this.setState((state) => ({messages: [...state.messages, message]}))
    }
    render() {
        const {messages} = this.state;
        return <Chat {...{messages, onSendMessage: this.handleSendMessage}}/>
    }
}