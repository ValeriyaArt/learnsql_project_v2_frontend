export default (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        minWidth: 275,
        maxWidth: 500,
        marginRight: '50px'
    },
    description: {
        marginTop: 12,
    },
    actions: {
        padding: 16
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    }
});