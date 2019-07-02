import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import ProductListScreen from '../screens/ProductListScreen'
import MyProductsScreen from '../screens/MyProductsScreen'

export const AuthStack = createStackNavigator({ SignIn: SignInScreen });
export const AppStack = createStackNavigator({ ProductList: ProductListScreen, MyProducts: MyProductsScreen });

export default createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'App',
	}
))