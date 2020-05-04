import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";
import {getAuth} from "../../layout/getters";
import {getCurrentCourseTab} from './getters';

const mapStateToProps = (state) => {
    return {
        auth: getAuth(state),
        currentCourseTab: getCurrentCourseTab(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
