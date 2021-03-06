import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Import src/pages
import Logon from './pages/Logon'

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        {/* <Route path="/register" component={Register} /> */}
      </Switch>
    </BrowserRouter>
  )
}