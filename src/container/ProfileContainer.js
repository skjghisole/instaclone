import React, { useState } from 'react'
import { Profile } from '../view'

export default (props) => {
	const handleLogout = () => props.navigation.navigate('login')

	return <Profile
		handleLogout={handleLogout}
	/>
}