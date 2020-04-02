import React from 'react';
import Metric from '../../models/Metric.model'
import ListElem from './ListElem';
import { Header, Container, Divider, Button, Image, List } from 'semantic-ui-react';


type Iprops = {
    MetricList: Metric[]
}

export default (props: Iprops) => {

    return (
        <React.Fragment>
            <Header as='h4'>Results</Header>

            <List animated divided verticalAlign='middle'>
                {
                    props.MetricList.map((metric) =>
                        <ListElem Metric={metric}></ListElem>
                    )
                }
            </List>
        </React.Fragment>
    )
}