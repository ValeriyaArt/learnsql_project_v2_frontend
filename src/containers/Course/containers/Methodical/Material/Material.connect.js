import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import actions from '../../../actions';
import {getCurrentMethodicalMaterial, getCurrentMethodicalSubMaterial} from '../../../getters';

const mapStateToProps = (state) => {
    return {
        material: getCurrentMethodicalMaterial(state),
        subMaterialId: getCurrentMethodicalSubMaterial(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
