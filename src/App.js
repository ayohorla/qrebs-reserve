import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reservation from './pages/Reservation';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Layout from './component/layout/Layout'

function App() {
  return (
    <Layout>
      <br></br>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/Reservation'>
          <Reservation />
        </Route>
        <Route path='/Menu'>
          <Menu />
        </Route>
        <Route path='/Location'>
          <Location />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
