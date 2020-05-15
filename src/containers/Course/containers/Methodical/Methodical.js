import React from 'react';
import PropTypes from "prop-types";
import get from "lodash/get";

import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import withStyles from '@material-ui/core/styles/withStyles';

import Material from "./Material/Material";

import connect from './Methodical.connect';
import styles from './Methodical.styles';

class Methodical extends React.PureComponent{
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.courseId !== prevProps.courseId){
            this.props.actions.getCourseMethodicalMaterials();
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        this.props.actions.resetCourseMethodicalSubMaterial();
    }

    changeMaterialHandler = (id) => () => {
        this.props.actions.getCourseMethodicalMaterial(id);
    };

    renderMenu = () => {
        const {materials, classes, currentMaterialId} = this.props;

        return (
            <MenuList className={classes.menu}>
                {materials.map((material, index) =>
                    <MenuItem
                        onClick={this.changeMaterialHandler(material.id)}
                        key={`material-${index}`}
                        selected={currentMaterialId === material.id}
                        classes={{
                            selected: classes.selectedMenuItem,
                            root: classes.menuItem,
                        }}
                    >
                        {get(material, 'section_name')}
                    </MenuItem>
                )}
            </MenuList>
        )
    };

    render() {
        const {classes, isFetchingGet} = this.props;

        return(
            <Box display={'flex'} className={classes.root}>
                {this.renderMenu()}
                {!isFetchingGet && <Material />}
            </Box>
        );
    }
}

Methodical.propTypes = {
    actions: PropTypes.object,
    materials: PropTypes.array,
    courseId: PropTypes.string,
    currentMaterialId: PropTypes.number,
    isFetchingGet: PropTypes.bool
};

export default withStyles(styles)(connect(Methodical));