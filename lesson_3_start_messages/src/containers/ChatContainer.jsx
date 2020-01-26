import React, { Component } from 'react';

import { Chat } from '../components/Chat/Chat'

export class ChatContainer extends Component {
    state = {
        messages: [
            { name: "Ivan", content: "Hello!" },
            { name: "Oleg", content: "Hi, how are you?" },
            { name: "Ivan", content: "I am well" },
        ]
    }

   handleSendMessage = ({name, content}) => {
       this.setState((state) => ({messages: []}))
   }

    render() {
        const { messages } = this.state;
        return <Chat {...{ messages }}/>
    }
}