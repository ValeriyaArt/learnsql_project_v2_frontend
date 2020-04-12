import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "../../../actions";
import {getCurrentTask, getCurrentTaskError, getCurrentTaskSolution} from '../../../getters';

const mapStateToProps = (state) => {
    return {
        task: getCurrentTask(state),
        error: getCurrentTaskError(state),
        solution: getCurrentTaskSolution(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
