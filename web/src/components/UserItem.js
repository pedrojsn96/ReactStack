import React, { Component } from 'react';

import { ListGroup, Row, Col } from 'react-bootstrap';
import { Switch, Redirect } from 'react-router-dom';

import './UserItem.css';

class User extends Component {
	goToDetails = event => {
		event.preventDefault();
		alert('detalhe');

		return;
		// return (
		// 	<Switch>
		// 		<Redirect
		// 			to={{
		// 				pathname: '/user'
		// 			}}
		// 		/>
		// 	</Switch>
		// );
	};

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
							<button onClick={this.goToDetails} className="button">
								See User Details
							</button>
						</div>
					</Col>
				</Row>
			</ListGroup.Item>
		);
	}
}

export default User;
