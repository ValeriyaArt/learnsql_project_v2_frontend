import React from 'react';
import PropTypes from "prop-types";
import get from "lodash/get";

import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import withStyles from '@material-ui/core/styles/withStyles';

import connect from './Methodical.connect';
import styles from './Methodical.styles';

class Methodical extends React.PureComponent{
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.courseId !== prevProps.courseId){
            this.props.actions.getCourseMethodicalMaterials();
        }
    }

    componentDidMount() {
        this.props.actions.getCourseMethodicalMaterials();
    }

    changeMaterialHandler = (id) => () => {
        // this.props.actions.setCurrentMaterialId(routeId);
        // this.props.actions.getCourseMethodicalMaterial(id);
    };

    renderMenu = () => {
        const {materials, classes} = this.props;

        return (
            <MenuList className={classes.menu}>
                {materials.map((material, index) =>
                    <MenuItem
                        onClick={this.changeMaterialHandler()}
                        key={`task-${index}`}
                        className={classes.menuItem}
                    >
                        Материал {index + 1}
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
                {!isFetchingGet && < />}
            </Box>
        );
    }
}

Methodical.propTypes = {
    materials: PropTypes.array,
    courseId: PropTypes.string,
    isFetchingGet: PropTypes.bool
};

export default withStyles(styles)(connect(Methodical));