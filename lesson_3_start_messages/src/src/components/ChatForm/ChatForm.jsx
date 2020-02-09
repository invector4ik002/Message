import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * Component - отрисовка поля отправки нового сообщения
 * @param {function} onSendMessage - обработчик отправки нового сообщения.
 * @param {string} name - имя пользователя.
 * @param {string} message - сообщение пользователя.
 */
export class ChatForm extends Component {
    state = {
        name: 'User',
        content: 'Message'
    }
    textarea = React.createRef();
    componentDidMount() {
        this.textarea.current.focus();
    }
    /**
     * function - обработчик события onChange.
     * @param {string} currentTarget: - поле события event.
     * @param {string} value - назначение на изменение стейта.
     * @param {string} name - наименование инпута.
     * @method [<setState>] - меняенм стейт полученного сообщения и инени пользователя.
     */
    handleInput = ({currentTarget: {value, name}}) => {
        // console.log(value);
        this.setState(() => ({[name]: value}))
    }
    handleClick = () => {
        const {name, content} = this.state;
        this.props.onSendMessage({name, content});
    }
    render() {
        return(
            <div>
                <input name='name' value={this.state.name} onChange={this.handleInput} type='text'/>
                <textarea name='content' value={this.state.content} onChange={this.handleInput} ref={this.textarea}/>
                <button onClick={this.handleClick}>send a message</button>
            </div>
        );        
    }
}

ChatForm.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
};