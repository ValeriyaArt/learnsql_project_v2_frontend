export default (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        maxWidth: 700,
        width: '45%',
        marginRight: '50px',
        marginBottom: '50px'
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
        textDecoration: 'none'
    }
});