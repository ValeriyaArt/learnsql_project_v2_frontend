import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'
import TextField from '@material-ui/core/TextField'
import Button from '../../../components/Button'
import { service } from '../../SignIn/service'
import { service as userService } from '../../../service/user-service'
import { useStyles } from './SignIn.styles'
import actions from '../../../layout/actions'
import {appRouter} from '../../../service/router-service'

export default () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogin = useCallback(async () => {
    try {
      const res = await service.signIn(password, login)
      const token = res?.data?.auth_token
      userService.setToken(token)
      dispatch(actions.setAuthTrue())
      history.push(appRouter.getHomeRoute())
    } catch (e) {
      dispatch(actions.fetchingFailed(e));
    }

    setLogin('')
    setPassword('')
  }, [login, password])

  return (
    <div className={classes.form}>
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
      <Button
        type='outlined'
        color='primary'
        className={classes.button}
        disabled={login.length === 0 || password.length === 0}
        onClick={handleLogin}
      >
        Войти
      </Button>
    </div>
  )
}