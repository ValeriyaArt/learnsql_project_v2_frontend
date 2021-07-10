import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'
import TextField from '@material-ui/core/TextField'
import Button from '../../../components/Button'
import { service } from '../service'
import { service as userService } from '../../../service/user-service'
import { useStyles } from './SignIn.styles'
import actions from '../../../layout/actions'
import {appRouter} from '../../../service/router-service'
import Typography from "@material-ui/core/Typography";
import layoutActions from "../../../layout/actions";

export default () => {
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [lostPassword, setLostPassword] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = useCallback(async () => {
    try {
      const res = await service.signIn(password, login)
      const token = res?.data?.auth_token
      userService.setToken(token)
      dispatch(actions.setAuthTrue())
      history.push(appRouter.getAllCoursesRoute())
    } catch (e) {
      dispatch(actions.fetchingFailed(e));
    }

    setLogin('')
    setPassword('')
  }, [login, password])

  const handleResetPassword = useCallback(async () => {
    try {
      await service.resetPassword(email)
      dispatch(layoutActions.fetchingSuccess(['Проверьте почту']));
    } catch (e) {
      dispatch(actions.fetchingFailed(['Произошла ошибка']));
    }

    setEmail('')
  }, [email])

  return (
    <div className={classes.form}>
      {lostPassword ?
        <>
          <TextField
            label='Email'
            InputLabelProps={{ shrink: true }}
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Typography
            className={classes.link}
            onClick={() => setLostPassword(!lostPassword)}
          >
            Войти
          </Typography>
          <Button
            type='outlined'
            color='primary'
            className={classes.button}
            disabled={email.length === 0}
            onClick={handleResetPassword}
          >
            Восстановить пароль
          </Button>
        </>
        :
        <>
          <TextField
            label='Логин'
            InputLabelProps={{ shrink: true }}
            className={classes.input}
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />
          <TextField
            label='Пароль'
            InputLabelProps={{ shrink: true }}
            className={classes.input}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
          <Typography
            className={classes.link}
            onClick={() => setLostPassword(!lostPassword)}
          >
            Забыли пароль?
          </Typography>
          <Button
            type='outlined'
            color='primary'
            className={classes.button}
            disabled={login.length === 0 || password.length === 0}
            onClick={handleLogin}
          >
            Войти
          </Button>
        </>
      }
    </div>
  )
}