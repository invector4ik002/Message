import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
/**
 * 
 * @param {string} messages - массив с обьектами, обьекты содержат имя пользователя и сообщение. 
 */
export const MessageField = ({ messages }) => 
    (messages.map((message, index) => <Message {...message} key={index}/>));

//https://ru.reactjs.org/docs/typechecking-with-proptypes.html
MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};