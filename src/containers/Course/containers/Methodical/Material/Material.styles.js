export default (theme) => ({
    root: {
        padding: 50,
        width: '100%'
    },
    heading: {
        fontWeight: 600
    },
    expansionPanel: {
        boxShadow: '0px 0px 6px 1px rgba(194,194,194,0.3)',
        '&:before': {
            backgroundColor: 'transparent'
        }
    }
});