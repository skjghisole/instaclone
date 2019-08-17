import React from 'react'
import { View, Button } from 'react-native'
import style from './style'

export default (props) => {
	return (
		<View style={style.profileContainer}>
			<Button
				onPress={props.handleLogout}
				title='Logout'
			/>
		</View>
	)
}