import React from 'react';
import { NavLink, Route, Link } from 'react-router-dom';
import { Container, Header, Menu, Image, Dropdown, Input } from 'semantic-ui-react';
import logo from '../../logo.png';
// import metricList from './views/metricList/MetricList';
// import metricDetail from './views/metricDetail/metricDetail';
type Iprops = {

}

export default (props: Iprops) => {


    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header href="/">
                    <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                    Metric Viewer
                </Menu.Item>
                <Menu.Item as={Link} to="/">
                    Home
                </Menu.Item>
                <Menu.Item as={Link} to="/detail">
                    Metric Detail
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Metric Id...' />
                    </Menu.Item>
                </Menu.Menu>

            </Container>

        </Menu>
    )
}


