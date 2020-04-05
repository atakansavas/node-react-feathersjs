import React from 'react';
import { Route } from 'react-router-dom';
import { Segment, Grid } from 'semantic-ui-react';
import metricList from './views/metricList/MetricList';
import metricDetail from './views/metricDetail/metricDetail';
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <Header />

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Route exact path="/" component={metricList} />
          <Route path="/detail" component={metricDetail} />
        </Grid>
      </Segment>
    </div>
  );
}

export default App;
