export default (theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
        padding: 20,
    },
    startDate: {
        color: theme.palette.primary.main
    },
    button: {
        borderRadius: '35px',
        boxShadow: 'none',
    },
    ratingSubtitle: {
        display: 'flex',
        alignItems: 'center'
    },
    themeGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '0px 10px',
        '& p': {
            fontSize: '14px'
        }
    },
    themesSubtitle: {
        fontWeight: 'bold',
        marginTop: '10px'
    },
    subTitle: {
        marginRight: '10px',
        fontSize: '16px',
        '& p': {
            fontSize: '16px'
        }
    },
    card: {
        boxShadow: 'none',
        border: `2px solid #E5E5E5`,
        padding: 25,
        borderRadius: '8px',
        boxSizing: 'border-box'
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
    },
    description: {
        marginTop: 20,
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
    },
    date: {
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center'
    }
});