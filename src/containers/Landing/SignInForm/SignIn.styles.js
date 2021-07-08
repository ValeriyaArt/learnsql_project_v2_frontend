import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => createStyles({
  input: {
    marginBottom: '11px',
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: `2px solid ${theme.palette.primary.main} !important`
    }
  },
  button: {
    marginTop: '30px'
  },
  form: {
    boxSizing: 'border-box',
    width: '400px',
    flex: 'none',
    background: 'rgba(196,196,196,0.1)',
    padding: '35px',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content'
  },
  link: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.dark,
    }
  },
}))