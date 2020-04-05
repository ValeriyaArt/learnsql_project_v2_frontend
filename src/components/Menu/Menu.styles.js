export default (theme) => ({
    drawerPaper: {
        width: 250,
        height: `calc(100vh - ${theme.appBarHeight})`,
        marginTop: 64,
    },
    link: {
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center',
        color: theme.palette.text.primary,
        width: '100%',
        padding: '6px 16px'
    },
    listItem: {
        padding: 0
    }
});