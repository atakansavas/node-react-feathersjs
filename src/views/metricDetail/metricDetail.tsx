import React from 'react';
import { Segment, Header, Container } from 'semantic-ui-react';
import { RouteComponentProps } from 'react-router-dom';
import { MetricService } from '../../services/MetricService';
import { ApiService } from '../../services/ApiService';

export default (route: RouteComponentProps) => {
    const queryParams = new URLSearchParams(route.location.search);
    const _id = queryParams.get("id");

    const metric = MetricService.GetMetric(_id + "");

    console.log(metric);

    return (
        <div>
            <Header as='h2' content={'Metric Detail - ' + metric._id} textAlign='center' />
            <Container>
                <Segment.Group>
                    <Segment vertical>
                        <div style={{ paddingLeft: 20 }}>
                            <b>Api Adi =></b>
                            {ApiService.GetApiName(metric.apiId).apiName}
                        </div>
                    </Segment>
                    {/* <Segment vertical>
                        <div style={{ paddingLeft: 20 }}>
                            <b>Id =></b>
                            {metric._id}
                        </div>
                    </Segment> */}
                    <Segment vertical>
                        <div style={{ paddingLeft: 20 }}>
                            <b>Tarihi =></b>
                            {metric.createDate}
                        </div>
                    </Segment>
                    <Segment vertical>
                        <div style={{ paddingLeft: 20 }}>
                            <b>Error Id =></b>
                            {metric.errorId}
                        </div>
                    </Segment>
                </Segment.Group>

            </Container>




        </div>)
}