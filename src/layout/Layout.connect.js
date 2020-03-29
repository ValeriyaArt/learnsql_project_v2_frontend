import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";
import {isFetching, getErrors, getSuccessMessages} from './getters';

const mapStateToProps = (state) => {
    return {
        fetching: isFetching(state),
        errors: getErrors(state),
        successMessages: getSuccessMessages(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
