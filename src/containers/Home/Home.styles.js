export default (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 50,
    },
    card: {
        boxShadow: '0px 0px 6px 1px rgba(194,194,194,0.3)',
        padding: 25,
        maxWidth: 700,
        width: '45%',
        marginRight: '50px',
        marginBottom: '50px',
        boxSizing: 'border-box'
    },
    description: {
        marginTop: 12,
    },
    actions: {
        padding: 16,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.dark,
        }
    }
});