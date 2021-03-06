import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { ContextProvider } from 'context'
import { routingConfig } from 'common/routingConfig'
import { history } from 'common/history'
import { Layout } from 'layout'

import { ErrorBoundary } from 'react-error-boundary'
import { ErrorDialog } from 'components/errorDialog'
// import { NotFound } from 'screens/notFound'
import { LoginPage } from 'screens/loginPage'

import { RouteElement } from 'common/types'

import './App.css'

export const App: React.FC = () => (
  <Layout>
    <Router history={history}>
      <Switch>
        <Route key={'login'} exact path='/' component={LoginPage} />
        <ErrorBoundary FallbackComponent={ErrorDialog}>
          <ContextProvider>
            {routingConfig.map((page: RouteElement) => {
              const { exact, path, component, id } = page
              return (
                <Route
                  key={id}
                  exact={exact}
                  path={path}
                  component={component}
                />
              )
            })}
          </ContextProvider>
        </ErrorBoundary>
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  </Layout>
)
