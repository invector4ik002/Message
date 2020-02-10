import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component сообщение
 * @param {string} name - имя пользователя.
 * @param {string} content - сообщение пользователя.
 */
export const Message = ({ name, content }) => (<div><strong>{name}: </strong>{content}</div>);
    
Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};