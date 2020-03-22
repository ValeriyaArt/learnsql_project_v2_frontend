import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";
import * as Enum from './enum';
import {getFieldValue, getGroupOptions} from './getters';

const mapStateToProps = (state) => {
    return {
        groupOptions: getGroupOptions(state),
        username: getFieldValue(state, Enum.USERNAME_FIELD),
        firstName: getFieldValue(state, Enum.FIRST_NAME_FIELD),
        lastName: getFieldValue(state, Enum.LAST_NAME_FIELD),
        photo: getFieldValue(state, Enum.PHOTO_FIELD),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
