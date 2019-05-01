import React, { Component } from 'react';

import './User.css';

import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Map from '../components/Map';

class User extends Component {
	render() {
		const { location } = this.props;
		const { params } = location;

		if (params === undefined) {
			return <Redirect to="/" />;
		}

		const { user } = params;

		return (
			<div className="App">
				<Container>
					<Row>
						<Col xs={12}>
							<h3>User Details Example</h3>
							<hr />
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<div>
								<p className="users-list__name">Name: {user.name}</p>
								<p className="users-list__company-name">
									<i>Company Name: {user.company.name}</i>
								</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<Map
								isMarkerShown
								googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ height: `400px` }} />}
								mapElement={<div style={{ height: `100%` }} />}
								location={user.address.geo}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default User;
