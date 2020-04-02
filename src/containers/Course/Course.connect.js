import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from "./actions";

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
