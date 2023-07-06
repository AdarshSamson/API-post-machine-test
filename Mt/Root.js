import React from 'react'

import Navigations from './Navigations'
import { AuthProvider } from './context/AuthContext'


function Root() {
  return (
    <AuthProvider><Navigations/></AuthProvider>
    
   
  )
}

export default Root
