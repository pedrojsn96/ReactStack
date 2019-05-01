import React, { Component } from 'react';

import './User.css';

import { Container, Row, Col } from 'react-bootstrap';

class User extends Component {
	render() {
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
								<p className="users-list__name">Nome</p>
								<p className="users-list__company-name">
									<i>Company</i>
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
