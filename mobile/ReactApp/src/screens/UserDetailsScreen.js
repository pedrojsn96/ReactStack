import React, { Component } from 'react';
import { View, Text } from 'react-native';

class UserDetailsScreen extends Component {
	static navigationOptions = {
		title: 'UserDetails'
	};

	render() {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		return (
			<View>
				<Text>Name: {params.name}</Text>
				<Text>Company Name: {params.company.name}</Text>
			</View>
		);
	}
}
export default UserDetailsScreen;
