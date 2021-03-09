import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Moviedetails from '../pages/Moviedetails';
import Movies from '../pages/Movies';
import NoMatch from '../pages/NoMatch';

const Routes = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/movies" />
      <Route exact path="/movies">
        <Movies />
      </Route>
      <Route path="/movies/:slug">
        <Moviedetails />
      </Route>
      <Route exact path="/*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
