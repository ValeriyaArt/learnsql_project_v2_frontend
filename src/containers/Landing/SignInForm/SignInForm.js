import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory, useLocation} from 'react-router'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '../../../components/Button'
import { service } from '../service'
import { service as userService } from '../../../service/user-service'
import actions from '../../../layout/actions'
import {appRouter} from '../../../service/router-service'
import layoutActions from '../../../layout/actions'
import { useStyles } from './SignIn.styles'

export default () => {
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [lostPassword, setLostPassword] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

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

  const handleGoogleSignIn = async () => {
    const { data } = await axios.get('http://62.109.28.95:8001/social-auth/o/google-oauth2/?redirect_uri=http://localhost:8001/admin')
    window.location.replace(data.authorization_url)
  }

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
          {/*<Button*/}
          {/*  type='outlined'*/}
          {/*  color='primary'*/}
          {/*  className={classes.button}*/}
          {/*  disabled={login.length === 0 || password.length === 0}*/}
          {/*  onClick={handleLogin}*/}
          {/*>*/}
          {/*  Войти с помощью гугл*/}
          {/*</Button>*/}

          <div onClick={handleGoogleSignIn}> GOODLE </div>
        </>
      }
    </div>
  )
}