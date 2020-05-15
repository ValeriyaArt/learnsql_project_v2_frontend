export default (theme) => ({
    tabMenu: {
        borderBottom: '1px solid #f4f4f4'
    },
    courseTabContent: {
        height: 'calc(100vh - 180px)'
    },
    paper: {
        height: '100%',
        boxShadow: '0px 0px 6px 1px rgba(194,194,194,0.3)',
        overflow: 'hidden'
    },
    tabs: {
        padding: '0px 50px'
    },
    tab: {
        padding: '20px'
    },
    tabRoot: {
        display: 'flex',
        flexDirection: 'row',
        '& svg': {
            marginRight: 10
        }
    },
    tabSelected: {
        color: theme.palette.secondary.main,
    }
});