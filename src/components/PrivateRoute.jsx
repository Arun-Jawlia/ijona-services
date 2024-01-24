import React, { useState } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

const PrivateRoute = ({children}) => {

    const {isAuth} = useState(AuthContext)
    console.log(isAuth)



  return children
}

export default PrivateRoute