import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";
import {getCourses, getMyCourses} from './getters';

const mapStateToProps = (state) => {
    return {
        courses: getCourses(state),
        myCourses: getMyCourses(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
