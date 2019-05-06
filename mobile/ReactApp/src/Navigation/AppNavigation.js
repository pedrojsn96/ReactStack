import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';

const MainNavigator = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		UserDetails: { screen: UserDetailsScreen }
	},
	{
		initialRouteName: 'Home'
	}
);

const AppNavigation = createAppContainer(MainNavigator);

export default AppNavigation;
