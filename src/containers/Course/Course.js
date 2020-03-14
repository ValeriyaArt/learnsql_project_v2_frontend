import React from 'react';
import Link from 'react-router-dom/Link';
import PropTypes from "prop-types";
import get from 'lodash/get';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import TasksTab from './containers/Tasks';

import connect from './Course.connect';
import styles from './Course.styles';

class Course extends React.PureComponent{
    state = {
        currentTab: 2,
    };

    changeTabHandler = (event, tabNumber) => {
        this.setState({currentTab: tabNumber});
    };

    renderTabMenu = () => {
        const {currentTab} = this.state;
        const {classes} = this.props;

        return (
            <div className={classes.tabMenu}>
                <Tabs value={currentTab}
                      onChange={this.changeTabHandler}
                >
                    <Tab label={'Статистика'} />
                    <Tab label={'Методические материалы'} />
                    <Tab label={'Задания'} />
                </Tabs>
            </div>
        );
    };

    renderTabContent = () => {
        const {currentTab} = this.state;

        switch (currentTab) {
            case 0:
                return <> Cтатистика </>;
            case 1:
                return <> Методические материалы </>;
            case 2:
                return <TasksTab />;
        }

    };

    render() {
        const {classes} = this.props;

        return(
            <>
                {this.renderTabMenu()}
                {this.renderTabContent()}
            </>
        );
    }
}

Course.propTypes = {

};

export default withStyles(styles)(connect(Course));