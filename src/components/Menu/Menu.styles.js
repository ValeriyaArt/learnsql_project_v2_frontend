export default (theme) => ({
    drawerPaper: {
        width: 250,
        height: `calc(100vh - ${theme.appBarHeight})`,
        marginTop: 64,
    },
    divider: {
        backgroundColor: '#f4f4f4'
    },
    selectedMenuItem: {
        color: `${theme.palette.secondary.main} !important`,
        backgroundColor: 'transparent !important',
        borderLeft: '2px solid #ec1946',
        padding: '10px 16px',
        '&:hover': {
            backgroundColor: '#f4f4f4 !important'
        }
    },
    menuList: {
        padding: 0
    },
    menuItem: {
        transition: 'all 0.2s',
        margin: '5px 2px',
        padding: '10px 16px',
        color: theme.palette.text.primary,
        '&:hover': {
            backgroundColor: '#f4f4f4 !important',
            color: `${theme.palette.secondary.main} !important`,
            '& svg': {
                color: theme.palette.secondary.main,
            },
        }
    },
    link: {
        textDecoration: 'none'
    },
    icon: {
        marginRight: 10
    }
});