import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Mail';
import QuestionIcon from '@material-ui/icons/Mail';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './Menu.styles';

class Menu extends React.PureComponent{
    render() {
        const {classes, isOpen} = this.props;

        return(
            <Drawer
                variant="persistent"
                anchor="left"
                open={isOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Курс 1'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={'Курс 2'} />
                    </ListItem>
                </List>

                <Divider />

                <List>
                    <ListItem button>
                        <ListItemIcon><QuestionIcon /></ListItemIcon>
                        <ListItemText primary={'FAQ'} />
                    </ListItem>
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles)(Menu);