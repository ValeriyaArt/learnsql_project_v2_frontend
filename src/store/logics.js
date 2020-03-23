import SignInLogic from '../containers/SignIn/logics';
import SignUpLogic from '../containers/SignUp/logics';
import ProfileLogic from '../containers/Profile/logics';
import MainLogic from '../layout/logics';

export default [
    ...SignInLogic,
    ...SignUpLogic,
    ...ProfileLogic,
    ...MainLogic,
];