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
    },
    listItem: {
        padding: '10px 16px',
        ':&hover': {
            backgroundColor: '#f4f4f4 !important',
            color: theme.palette.secondary.main,
        }
    },
    divider: {
        backgroundColor: '#f4f4f4'
    },
});