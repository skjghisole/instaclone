import React from 'react'
import Feed from '../container/Feed'
import { Button, View } from 'react-native'
import { Navbar } from '../components'

export default Home = (props) => {
	return (
		<View>
			<Navbar />
			<Feed />
		</View>
	)
}
