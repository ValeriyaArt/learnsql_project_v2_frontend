import React from 'react';
import PropTypes from "prop-types";
import get from 'lodash/get';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import withStyles from '@material-ui/core/styles/withStyles';

import connect from './Material.connect';
import styles from './Material.styles';
import Scrollbars from "react-custom-scrollbars";

class Material extends React.PureComponent{
    state = {
        currentItem: ''
    };

    handleChangeCurrentPanel = (id) => () => {
        const {subMaterialId} = this.props;

        if (subMaterialId === id){
            this.props.actions.setCourseMethodicalSubMaterial('');
        } else {
            this.props.actions.setCourseMethodicalSubMaterial(id);
        }
    };

    render() {
        const {material, classes, subMaterialId} = this.props;

        return (
            <div className={classes.root}>
                <Scrollbars minheight={300}>
                    {material.map(item =>
                        <ExpansionPanel key={`material-item-${item.id}`}
                                        expanded={subMaterialId === item.id}
                                        onChange={this.handleChangeCurrentPanel(item.id)}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    {get(item, 'number')} {get(item, 'topic_name')}
                                </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography dangerouslySetInnerHTML={{__html: get(item, 'content')}} />
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )}
                </Scrollbars>
            </div>
        )
    }
}

Material.propTypes = {
    material: PropTypes.array,
    actions: PropTypes.object,
};

export default withStyles(styles)(connect(Material));