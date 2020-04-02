import React from 'react';
import ListElem from '../../components/metric/ListElem';
import { Header, Container, Divider, Button, Image, List } from 'semantic-ui-react';
import MetricList from '../../components/metric/List';
import Metric from '../../models/Metric.model'

type Iprops = {

}

export default (props: Iprops) => {
    const data: Metric[] = [
        {
            _id: "5e82601c41d828d764dd5609",
            apiId: 1,
            errorId: "ad740e90-59c5-4dc5-9f52-4d1183062238",
            createDate: "2014-10-12T05:51:22 -03:00"
        },
        {
            _id: "5e82601c12e0e16d4365ad13",
            apiId: 5,
            errorId: "657dffad-57a9-47e8-ad23-45cef1e24687",
            createDate: "2015-09-06T04:49:23 -03:00"
        },
        {
            _id: "5e82601c0d318481ea121992",
            apiId: 9,
            errorId: "81a23290-7f12-4419-9716-d7090d1c66c9",
            createDate: "2016-10-11T02:02:59 -03:00"
        },
        {
            _id: "5e82601cfe26a0d619d927a9",
            apiId: 9,
            errorId: "d962ed15-39b7-453a-b150-5179df9f33ba",
            createDate: "2019-02-24T03:22:16 -03:00"
        },
        {
            _id: "5e82601cf6278759458dba34",
            apiId: 2,
            errorId: "74d57278-6204-4cf5-82b2-8fdd2ffe5cb1",
            createDate: "2020-02-13T02:21:04 -03:00"
        },
        {
            _id: "5e82601cf74ae5351462646a",
            apiId: 7,
            errorId: "fc0975ef-3775-4986-93c7-45de45dc3db6",
            createDate: "2019-08-23T06:33:46 -03:00"
        },
        {
            _id: "5e82601c8625f2f553cdaf46",
            apiId: 3,
            errorId: "9961d04d-d923-4142-a839-2e4f52aa102f",
            createDate: "2014-11-09T06:35:06 -02:00"
        },
        {
            _id: "5e82601cf2dd0fe9eb514403",
            apiId: 2,
            errorId: "dd85f074-c7d2-4f87-9827-02b92446e433",
            createDate: "2014-12-29T07:06:08 -02:00"
        },
        {
            _id: "5e82601c77092de2ac4f2499",
            apiId: 7,
            errorId: "1d918baf-c092-4053-94ea-f28eb305d8f3",
            createDate: "2015-10-13T05:22:08 -03:00"
        },
        {
            _id: "5e82601c9132e15b7f5f1756",
            apiId: 4,
            errorId: "b66314cc-d971-4548-99a2-a8730b63479b",
            createDate: "2015-03-30T04:08:55 -03:00"
        }
    ]

    console.log(data);

    return (
        <React.Fragment>
            <Header as='h2' content='Metric List' textAlign='center' />
            <Container>

                <Divider />
                <MetricList MetricList={data}></MetricList>

            </Container>
        </React.Fragment>
    )
}