import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {usersList} from '../store/chatAction';
import {UsersList} from '../components/UsersList/UsersList'

const mapStateToProps = (store) => {
    console.log(store)
    return {
        messages: store.chatReducer.chats[id].messages,
    }
}

export default connect(mapStateToProps)(UsersList);
