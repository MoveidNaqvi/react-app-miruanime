import useAuthStatus from "../../hooks/useAuthStatus"
import {Navigate} from 'react-router-dom'
import Spinner from '../spinner/Spinner.jsx'

function PrivateRoute({children}) {

  const {loggedIn, checkingStatus} = useAuthStatus()

  if(checkingStatus){
    return <Spinner/>
  }

  return loggedIn ? children : <Navigate to='/sign-in'/>
}

export default PrivateRoute