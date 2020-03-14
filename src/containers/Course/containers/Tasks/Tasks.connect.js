import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getTasks} from '../../getters';

const mapStateToProps = (state) => {
    return {
        tasks: getTasks(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
