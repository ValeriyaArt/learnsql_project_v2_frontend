import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";
import * as Enum from './enum';
import {getFieldValue} from './getters';

const mapStateToProps = (state) => {
    return {
        disableButton: getFieldValue(state, Enum.PASSWORD_FIELD).length === 0
                    || getFieldValue(state, Enum.USERNAME_FIELD).length === 0,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
