import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import FeaturesContainer from "../containers/Features"
import HomeContainer from "../containers/Home"
import HelpContainer from "../containers/Help"
import TeamContainer from "../containers/Team"
import SignUpContainer from "../containers/SignUp"
import LogInContainer from "../containers/LogIn"



export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={HomeContainer} />
          <Route path="home" component={HomeContainer} />
          <Route path="features" component={FeaturesContainer} />
          <Route path="help" component={HelpContainer} />
          <Route path="login" component={LogInContainer} />
          <Route path="signup" component={SignUpContainer} />
          <Route path="team" component={TeamContainer} />
         
        </Route>
      </Router>
    )
  }
}