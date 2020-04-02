import React from 'react';
import Metric from '../../models/Metric.model'
import { List, Button } from 'semantic-ui-react';

type Iprops = {
    Metric: Metric
}

export default (props: Iprops) => {
    return (
        <List.Item>
            <List.Icon name='info circle' />
            <List.Content>
                <List.Header as='a'>{props.Metric.errorId}</List.Header>
                <List.Description>
                    {props.Metric.apiId} - {props.Metric.createDate}
                </List.Description>
            </List.Content>
        </List.Item>
    )
}