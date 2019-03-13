import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import theme from './themes/default'
import HomePage from './pages/HomePage'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
