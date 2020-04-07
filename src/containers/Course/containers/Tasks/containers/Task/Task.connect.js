import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "../../../../actions";
import {getCurrentTask} from '../../../../getters';

const mapStateToProps = (state) => {
    return {
        task: getCurrentTask(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
