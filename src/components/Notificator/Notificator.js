import React from 'react';
import shallowEqual from "recompose/shallowEqual";
import {withSnackbar} from 'notistack';
import PropTypes from "prop-types";

class Notificator extends React.Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !shallowEqual(this.props.errors, nextProps.errors)
            || !shallowEqual(this.props.successMessages, nextProps.successMessages)
        ;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.errors !== this.props.errors){
            // eslint-disable-next-line
            this.props.errors.map(error => {
                this.props.enqueueSnackbar(error.detail, {
                    variant: 'error',
                    autoHideDuration: 3000,
                });
            })
        }

        if (prevProps.successMessages !== this.props.successMessages){
            // eslint-disable-next-line
            this.props.successMessages.map(message => {
                this.props.enqueueSnackbar(message, {
                    variant: 'success',
                    autoHideDuration: 3000,
                });
            })
        }
    }

    render() {
        return <></>;
    }
}

Notificator.propTypes = {
    errors: PropTypes.array,
    successMessages: PropTypes.array,
};

export default withSnackbar(Notificator);