import React from 'react';
import PropTypes from 'prop-types';

import { Message } from '../Message/Message'
import { MessageField } from '../MessageField/MessageField';
import { ChatForm } from '../ChatForm/ChatForm';
/**
 * Component - отрисовка поля чата
 * @param {function} onSendMessage - обработчик отправки нового сообщения.
 * @param {string} name - имя пользователя.
 * @param {string} message - сообщение пользователя.
 * @param {string} messages - сообщение пользователя.
 */
export const Chat = ({ messages, message, name, onSendMessage }) => 
    (<div>
        <MessageField messages={messages}/>
        <ChatForm onSendMessage={onSendMessage}/>
    </div>);
//https://ru.reactjs.org/docs/typechecking-with-proptypes.html
ChatForm.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
};