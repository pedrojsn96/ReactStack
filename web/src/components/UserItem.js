import React, { Component } from 'react';

import { ListGroup, Row, Col } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

import './UserItem.css';

class User extends Component {
	render() {
		const { user } = this.props;
		return (
			<ListGroup.Item>
				<Row>
					<Col xs={8}>
						<div>
							<p className="users-list__name">{user.name}</p>
							<p className="users-list__company-name">
								<i>{user.company.name}</i>
							</p>
						</div>
					</Col>
					<Col xs={4}>
						<div className="users-list__see">
							<button className="button">
								<Link
									to={{
										pathname: `/user/${user.id}`,
										params: { user: user }
									}}
								>
									See User Details
								</Link>
							</button>
						</div>
					</Col>
				</Row>
			</ListGroup.Item>
		);
	}
}

export default withRouter(User);
