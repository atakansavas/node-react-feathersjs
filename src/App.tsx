import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MetricList from './views/metricList/MetricList';
import metricDetail from './views/metricDetail/metricDetail';


function App() {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Contacts List
        </NavLink>
        <NavLink
          className="item"
          activeClassName="active"
          exact
          to="/metric/detail"
        >
          Add Contact
        </NavLink>
      </div>

      <Route exact path="/" component={MetricList} />
      <Route path="/metric/detail" component={metricDetail} />
    </Container>
  );
}

export default App;
