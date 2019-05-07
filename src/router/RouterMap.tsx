import * as React from 'react'
import * as Loadable from 'react-loadable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../containers/App'
import loading from './loading'
const RouterList: any[] = [
  {
    component: () => import('../containers/Home'),
    path: '/'
  },
  {
    component: () => import('../containers/Basicinfo'),
    path: '/basic'
  },
  {
    component: () => import('../containers/Skillinfo'),
    path: '/skill'
  },
  {
    component: () => import('../containers/Projects'),
    path: '/projects'
  },
  {
    component: () => import('../containers/Experience'),
    path: '/experience'
  },
  {
    component: () => import('../containers/Evaluation'),
    path: '/self-evaluation'
  }
]
const RouterMap = () => (
  <Router>
    <App>
      <Switch>
        {RouterList.map(item => (
          <Route
            key={item.path}
            exact={true}
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading
            })}
          />
        ))}
      </Switch>
    </App>
  </Router>
)

export default RouterMap
