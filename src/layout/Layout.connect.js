import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";
import {isFetching, getErrors, getUser, getGroupOptions, getSuccessMessages} from './getters';

const mapStateToProps = (state) => {
    return {
        fetching: isFetching(state),
        errors: getErrors(state),
        successMessages: getSuccessMessages(state),
        user: getUser(state),
        groupOptions: getGroupOptions(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
