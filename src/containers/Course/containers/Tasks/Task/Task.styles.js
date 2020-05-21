export default (theme) => ({
    taskRoot: {
        width: '100%',
        height: 'calc(100% - 100px)',
        paddingBottom: '100px',
        display: 'flex'
    },
    leftSide: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '86px 50px 50px 50px',
        boxSizing: 'border-box'
    },
    taskInfo: {
        padding: '50px 50px 50px 50px',
        height: '100%',
        width: '50%',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
    },
    taskAnswerInfoBlock: {
        display: 'flex',
        flexDirection: 'column',
        height: '50%',
        boxSizing: 'border-box',
        paddingTop: '20px'
    },
    answerFieldBlock: {
        display: 'flex',
        flexDirection: 'column'
    },
    answerFieldContainer: {
        width: '100%',
        marginTop: 20
    },
    buttonsContainer: {
        marginTop: 20
    },
    button: {
        marginLeft: 10
    },
    simpleErrorText: {
        padding: '50px',
        marginTop: '20px',
        color: theme.palette.secondary.main
    },
    tableBody: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    table: {
        marginTop: '20px',
        marginRight: '50px'
    },
    taskDescription: {
        padding: '20px 0px'
    },
    image: {
        width: '100%',
        '& img': {
            maxWidth: '690px',
            width: '100%'
        }
    },
    tableTitle: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
    nextTaskButton: {
        marginLeft: 'auto'
    },
    simpleErrorBlock: {
        margin: 20,
        maxWidth: 'max-content'
    },
    materialSubItem: {
        marginLeft: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    materialItem: {
        fontWeight: 'bold',
    },
    themesContainer: {
        marginBottom: 50
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        color: theme.palette.secondary.main
    },
    tableCell: {
        border: '1px solid rgba(224, 224, 224, 1)'
    }
});