import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { ContextProvider } from 'context'
import { routingConfig } from 'common/routingConfig'
import { history } from 'common/history'
import { Layout } from 'layout'

import { RouteElement } from 'common/types'

import './App.css'
import { LoginPage } from 'screens/loginPage'

export const App: React.FC = () => (
  <Layout>
    <Router history={history}>
      <Switch>
        <Route key={'login'} exact path='/' component={LoginPage} />
        <ContextProvider>
          {routingConfig.map((page: RouteElement) => {
            const { exact, path, component, id } = page
            return (
              <Route key={id} exact={exact} path={path} component={component} />
            )
          })}
        </ContextProvider>
      </Switch>
    </Router>
  </Layout>
)
