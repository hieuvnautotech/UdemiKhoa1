import {Navigate, Outlet} from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus()
    // const loggedIn = true
    if(checkingStatus){
        return <Spinner/>
    }

  return loggedIn ? <Outlet/> : <Navigate to='/sign-in'/>
}

export default PrivateRoute