
export default (theme) => ({
    root: {
        display: 'flex',
        marginTop: '64px' //todo: add var from material ui theme
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        boxSizing: 'border-box',
        height: `calc(100vh - 64px)`, //todo: add var from material ui theme
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 250,
    },
});