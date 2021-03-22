import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/Home';
import Moviedetails from '../pages/Moviedetails';
import MoviesList from '../pages/MoviesList';
import NoMatch from '../pages/NoMatch';

const Routes = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Redirect exact from="/films" to="/movies" />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <MoviesList />
        </Route>
        <Route path="/movies/:slug">
          <Moviedetails />
        </Route>
        <Route exact path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default Routes;
