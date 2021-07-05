import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => createStyles({
  wrap: {
    maxWidth: '1195px',
    margin: '0 auto',
  },
  title: {
    fontWeight: 700,
    fontSize: '64px',
    color: theme.palette.primary.main,
    lineHeight: '64px',
    letterSpacing: '2px',
  },
  description: {
    fontSize: '25px',
    lineHeight: '34px',
    color: '#525252',
    marginTop: '28px',
    marginBottom: '38px',
    letterSpacing: '2px'
  },
  emptyForm: {
    width: '400px',
    flex: 'none',
  },
  mainScreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  form: {
    height: '490px',
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    padding: '20px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& img': {
      height: '50px',
      marginLeft: '-7px'
    },
    '& a': {
      fontWeight: 'bold',
      textDecoration: 'none',
      color: theme.palette.primary.main,
      fontSize: '20px',
    }
  },
  questions: {

  },
  question: {
    display: 'flex',
    color: '#525252',
    marginBottom: '120px',
    alignItems: 'center',
  },
  questionTitle: {
    fontSize: '30px',
    fontWeight: 600,
  },
  questionText: {
    fontSize: '25px',
    letterSpacing: '0.035em',
    marginTop: '10px',
  },
  questionBorder: {
    width: '140px',
    height: '8px',
    borderRadius: '10px',
  },
  questionImageRight: {
    marginLeft: '150px',
  },
  questionImageLeft: {
    marginRight: '76px',
  },
  learn: {
    marginBottom: '50px',
  },
  learnTitle: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: '50px',
    marginBottom: '60px',
  },
  learnItems: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  learnItem: {
    width: '32%',
    color: '#525252',
    border: '2px solid #E5E5E5',
    borderRadius: '8px',
    padding: '28px',
    boxSizing: 'border-box',
    position: 'relative',
  },
  square: {
    width: '30px',
    height: '30px',
    background: theme.palette.primary.main,
    position: 'absolute',
  },
  learnItemTitle: {
    fontSize: '25px',
    fontWeight: 600,
  },
  learnItemText: {
    fontSize: '20px',
  },
  offer: {
    background: theme.palette.primary.main,
    padding: '50px 0px 80px',
  },
  offerTitle: {
    color: '#fff',
    fontWeight: 600,
    fontSize: '50px',
    marginBottom: '60px',
  },
  offerList: {
    display: 'flex',
  },
  offerItem: {
    width: '24%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      width: '100px',
    }
  },
  offerItemText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '20px',
    marginTop: '10px'
  },
  courses: {
    marginTop: '50px',
  },
  coursesTitle: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: '50px',
    marginBottom: '60px',
  },
  coursesList: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  coursesListItem: {
    width: '48%',
    color: '#525252',
    border: '2px solid #E5E5E5',
    borderRadius: '8px',
    padding: '28px',
    boxSizing: 'border-box',
  },
  coursesListItemTitle: {
    fontSize: '25px',
    fontWeight: 600,
  },
  coursesListItemDescription: {
    fontSize: '20px',
    marginTop: '10px',
  },
  footer: {
    marginTop: '100px',
    background: '#5F5F5F',
    padding: '25px 0px',
  },
  footerLink: {
    color: '#fff'
  },
  getAccessButton: {
    fontSize: '25px !important'
  }
}))