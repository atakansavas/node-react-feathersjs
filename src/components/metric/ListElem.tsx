import React from 'react';
import Metric from '../../models/Metric.model'
import { List, Button } from 'semantic-ui-react';
import { ApiService } from '../../services/ApiService';
import { Link } from 'react-router-dom';

type Iprops = {
    Metric: Metric
}

export default (props: Iprops) => {

    const api = ApiService.GetApiName(props.Metric.apiId);

    return (
        <List.Item>
            <List.Icon name='info circle' />
            <List.Content>
                <List.Header >
                    <Link target="_blank" to={"/detail?id=" + props.Metric._id} >
                        {props.Metric.errorId}
                    </Link>
                </List.Header>
                <List.Description>
                    {api.apiName} - {props.Metric.createDate}
                </List.Description>
            </List.Content>
        </List.Item>
    )
}