import React, { Component } from 'react';

import './Home.css';
import api from '../services/api';
import UsersList from '../components/UsersList';

import { withRouter } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		};
	}

	componentDidMount() {
		api
			.get('users')
			.then(users => {
				this.setState({
					users: users.data
				});
			})
			.catch(error => console.log(error.message));
	}

	render() {
		const { users } = this.state;
		return (
			<div className="App">
				<UsersList users={users} />
			</div>
		);
	}
}

export default withRouter(Home);
