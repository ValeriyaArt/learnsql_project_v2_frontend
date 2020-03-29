export default (theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    form: {
        boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.1)',
        background: 'white',
        margin: 'auto',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px'
    },
    changePassword: {
        color: theme.palette.primary.main,
        cursor: 'pointer',
        marginTop: '15px',
        marginBottom: '15px',
    }
});