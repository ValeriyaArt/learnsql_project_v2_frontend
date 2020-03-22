import SignInLogic from '../containers/SignIn/logics';
import SignUpLogic from '../containers/SignUp/logics';
import ProfileLogic from '../containers/Profile/logics';

export default [
    ...SignInLogic,
    ...SignUpLogic,
    ...ProfileLogic,
];