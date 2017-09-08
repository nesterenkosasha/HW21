import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import LayoutContainer from "../containers/Layout"

import SomeComponent from "../containers/Some"


export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <Route path="jackets" component={LayoutContainer} />
          <Route path="jackets/:jacketsId" component={SomeComponent} />
          
        </Route>
      </Router>
    )
  }
}