import React, { Component } from 'react';

import './User.css';

import { Container, Row, Col } from 'react-bootstrap';

class User extends Component {
	render() {
		const { location } = this.props;
		const { params } = location;
		const { user } = params;

		return (
			<div className="App">
				<Container>
					<Row>
						<Col xs={12}>
							<h3>User Details Example</h3>
						</Col>
					</Row>
					<Row>
						<Col xs={12}>
							<div>
								<p className="users-list__name">{user.name}</p>
								<p className="users-list__company-name">
									<i>{user.company.name}</i>
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default User;
