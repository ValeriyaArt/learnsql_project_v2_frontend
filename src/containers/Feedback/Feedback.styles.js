export default (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 50,
    },
    card: {
        boxShadow: '0px 0px 6px 1px rgba(194,194,194,0.3)',
        padding: 25,
        width: '100%',
        marginRight: '50px',
        marginBottom: '50px',
        boxSizing: 'border-box'
    },
    form: {
        boxShadow: '0px 0px 6px 1px rgba(194,194,194,0.3)',
        background: 'white',
        margin: 'auto',
        width: '70$',
        display: 'flex',
        flexDirection: 'column',
        padding: '50px'
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
    },
    description: {
        marginTop: 20,
    },
    textField: {
        marginBottom: '15px',
        width: '80%',
        height: '30%',
    },
    button: {
        marginTop: '15px'
    },
    actions: {
        padding: 16,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});