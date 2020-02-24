import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {usersList} from '../store/chatAction';
import {UsersList} from '../components/UsersList/UsersList'
/**
 * Специальная функция для получения из стора того что будем менять
 * возвращает нужную стркутуру обьекта {id, name}
 * @param {Object} store - состояние из стора.
 * @returns {Object} - возвращенный объект нужной структуры.
 * @example
 * mapStateToProps(store)
 * //=>{id, name}
 */
const mapStateToProps = ({}) => {
    return {

    }
}
/**
 * Функция для проброса actions
 * @param {function} dispatch - отправитель actions
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({usersList}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);