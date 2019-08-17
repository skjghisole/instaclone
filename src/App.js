import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { Navbar } from './components'
import { createBottomTabNavigator, createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import { Home } from './view'
import { ProfileContainer, SignupContainer } from './container'
import UploadAvatar from './view/Signup/UploadAvatar'

const Login = (props) => {
	const handleLogin = () => props.navigation.navigate('main')
	const handleSignup = () => props.navigation.navigate('signup')
	return (
		<View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
			<Button
				title="Login"
				onPress={handleLogin}
			/>
			<Button
				title="Signup"
				onPress={handleSignup}
			/>
		</View>
	)
}

const Register = (props) => {
	const registerUser = () => props.navigation.navigate('login')
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Button
				title="Register"
				onPress ={registerUser}
			/>
		</View>
	)
}

const style = StyleSheet.create({
  textContainer : {
  	flex: 1,
  	width: '100%',
  	height: '100%',
  	backgroundColor: 'rgb(255, 255, 255)'
	},
})

const Tabs = createBottomTabNavigator({
	Home: Home,
	Profile: ProfileContainer
}, {
	defaultNavigationOptions: () => ({
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		}
  })
})

const SignupContainerStack = createStackNavigator({
	userCredentials: SignupContainer,
	uploadAvatar: UploadAvatar
})

const MainStack = createSwitchNavigator({
	login: Login,
	main: Tabs,
	signup: SignupContainerStack
})

const AppContainer = createAppContainer(MainStack)

const App = () => (
	<View style={style.textContainer}>
		<AppContainer />
	</View>
)

export default App