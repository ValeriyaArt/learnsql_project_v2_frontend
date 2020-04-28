import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "../actions";
import * as Enum from '../enum';
import {getFieldValue, isEmailError} from '../getters';
import {getGroupOptions, getUser} from '../../../layout/getters';

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
        groupOptions: getGroupOptions(state),
        username: getFieldValue(state, Enum.USERNAME_FIELD),
        firstName: getFieldValue(state, Enum.FIRST_NAME_FIELD),
        lastName: getFieldValue(state, Enum.LAST_NAME_FIELD),
        group: getFieldValue(state, Enum.GROUP_FIELD),
        email: getFieldValue(state, Enum.EMAIL_FIELD),
        isEmailError: isEmailError(state),
        disableButton: getFieldValue(state, Enum.FIRST_NAME_FIELD).length === 0
            || getFieldValue(state, Enum.LAST_NAME_FIELD).length === 0
            || getFieldValue(state, Enum.GROUP_FIELD).length === 0
        ,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
