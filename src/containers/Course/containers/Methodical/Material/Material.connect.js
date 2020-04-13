import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getCurrentMethodicalMaterial} from '../../../getters';

const mapStateToProps = (state) => {
    return {
        material: getCurrentMethodicalMaterial(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
