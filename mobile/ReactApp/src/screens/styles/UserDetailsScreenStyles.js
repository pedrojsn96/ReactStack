import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	nameWrapper: {
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	companyWrapper: {
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	nameTitle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	nameContent: {
		fontSize: 16,
		fontWeight: '300',
		marginTop: 10
	},
	companyName: {
		padding: 15
	},
	companyTitle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	companyContent: {
		fontSize: 16,
		fontWeight: '300',
		marginTop: 10
	},
	userContent: {
		padding: 15
	},
	separator: {
		marginTop: 5,
		borderRadius: 2,
		borderBottomWidth: 1,
		borderBottomColor: '#cecece'
	},
	userName: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	companyName: {
		fontSize: 14,
		fontWeight: '300'
	},
	//map
	wrapperMap: {
		marginTop: 8,
		width: width,
		height: 130
		// backgroundColor: 'red'
	}
});
