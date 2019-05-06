import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Components
import { Map } from '../components/';

// Styles
import styles from './styles/UserDetailsScreenStyles';

class UserDetailsScreen extends Component {
	static navigationOptions = {
		title: 'User Details Screen',
		headerStyle: {
			backgroundColor: '#cecece'
		}
	};

	render() {
		const { navigation } = this.props;
		const { state } = navigation;
		const { params } = state;
		const { address } = params;
		const { geo } = address;
		const { lat, lng } = geo;
		const constPlace = 'UFPE';
		const constPlaceDetail = 'Av. Prof. Moraes Rego, 1235 - CDU';
		return (
			<View style={styles.container}>
				<View style={styles.nameWrapper}>
					<Text style={styles.nameTitle}>Name</Text>
					<Text style={styles.nameContent}>{params.name}</Text>
				</View>
				<View style={styles.companyWrapper}>
					<Text style={styles.companyTitle}>Company Name</Text>
					<Text style={styles.companyContent}>{params.company.name}</Text>
				</View>
				<View style={styles.wrapperMap}>
					<Map
						lat={lat.toString()}
						long={lng.toString()}
						request={false}
						place={constPlace}
						weather={constPlaceDetail}
					/>
				</View>
			</View>
		);
	}
}
export default UserDetailsScreen;
