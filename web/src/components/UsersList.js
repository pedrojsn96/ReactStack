import React, { Component } from 'react';

import './UsersList.css';

import { ListGroup, Container, Row, Col } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

import UserItem from './UserItem';

class UsersList extends Component {
	render() {
		const { users } = this.props;
		return (
			<Container>
				<Row>
					<Col xs={12}>
						<h3>Users List Example</h3>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<ListGroup>
							{users.map(user => (
								<UserItem key={user.id} user={user} />
							))}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default withRouter(UsersList);
