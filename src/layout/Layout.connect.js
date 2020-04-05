import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";
import homeActions from "../containers/Home/actions";
import {isFetching, getErrors, getSuccessMessages, getAuth} from './getters';
import {getMyCourses} from "../containers/Home/getters";

const mapStateToProps = (state) => {
    return {
        fetching: isFetching(state),
        errors: getErrors(state),
        successMessages: getSuccessMessages(state),
        auth: getAuth(state),
        myCourses: getMyCourses(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({...homeActions, ...actions}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
