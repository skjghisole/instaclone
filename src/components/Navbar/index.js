import React from 'react'
import { View, Text } from 'react-native'
import style from './style'

export default Navbar = () => {
	return (
		<View style={style.navbarContainer}>
			<View style={style.navbarTitleContainer}>
				<Text>Dogstagram</Text>
			</View>
		</View>
	)
}