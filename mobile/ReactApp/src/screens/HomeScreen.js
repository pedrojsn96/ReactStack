import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	ActivityIndicator,
	TouchableOpacity
} from 'react-native';

import api from '../services/api';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home Screen'
	};

	constructor(props) {
		super(props);

		this.state = {
			users: [],
			loading: true
		};
	}

	componentDidMount() {
		api
			.get('users')
			.then(data =>
				this.setState({
					users: data.data,
					loading: false
				})
			)
			.catch(error => console.log(error));
	}

	renderItem = (element, index) => {
		const { item } = element;
		const { navigation } = this.props;
		return (
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate('UserDetails', item)}
				>
					<Text>{item.name}</Text>
					<Text>{item.company.name}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		const { users, loading } = this.state;

		if (loading || users === []) {
			return (
				<View>
					<ActivityIndicator />
				</View>
			);
		}
		return (
			<View>
				<FlatList
					data={users}
					renderItem={(item, index) => this.renderItem(item, index)}
					keyExtractor={(item, index) => index.toString()}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	}
}
export default HomeScreen;
