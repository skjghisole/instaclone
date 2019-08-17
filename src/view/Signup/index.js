import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import style from './style'

export default (props) => {
	return (
		<View style={style.signupContainer}>
			<View style={style.formContainer}>
				<Text>Signup</Text>
				<TextInput
					style={style.textInput}
					placeholder='username'
					blurOnSubmit={true}
					autoCorrect={false}
				/>
				<TextInput
					style={style.textInput}
					placeholder='password'
					secureTextEntry={true}
				/>
				<Button
					title="Next"
					onPress={() => props.navigation.navigate('uploadAvatar')}
				/>
			</View>
		</View>
	)
}