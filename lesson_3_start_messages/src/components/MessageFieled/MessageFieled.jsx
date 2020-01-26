import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
/**
 * 
 * @param {*} param0 
 */
export const MessageFieled = ({ messages }) =>
    (messages.map((message, index) => <Message {...message} key={index}/>));

    MessageFieled.propTypes = {
        //https://ru.reactjs.org/docs/typechecking-with-proptypes.html
        messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
    }