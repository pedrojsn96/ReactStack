import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	ActivityIndicator,
	TouchableOpacity
} from 'react-native';

import api from '../services/api';

import styles from './styles/HomeScreenStyles';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home Screen',
		headerStyle: {
			backgroundColor: '#cecece'
		}
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
			<View style={styles.userContent}>
				<TouchableOpacity
					onPress={() => navigation.navigate('UserDetails', item)}
				>
					<Text style={styles.userName}>{item.name}</Text>
					<Text style={styles.companyName}>{item.company.name}</Text>
					<View style={styles.separator} />
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		const { users, loading } = this.state;

		if (loading || users === []) {
			return (
				<View style={{ marginTop: 15 }}>
					<ActivityIndicator />
				</View>
			);
		}
		return (
			<View style={styles.container}>
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
