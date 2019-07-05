import { createStackNavigator, 
	createSwitchNavigator, 
	createAppContainer,
	createBottomTabNavigator,
} from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ProductListScreen from '../screens/ProductListScreen'
import MyProductsScreen from '../screens/AddedProductsScreen'

export const AuthStack = createBottomTabNavigator({ SignUp: SignUpScreen, SignIn: SignInScreen });
export const AppStack = createStackNavigator({ ProductList: ProductListScreen, MyProducts: MyProductsScreen });

export default createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Auth',
	}
))