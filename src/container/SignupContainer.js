import React, { useState } from 'react'
import { Signup } from '../view'

export default (props) => {
	const [credentials, setCredentials] = useState({ username: null, password: null})
	const [username, setUsername] = useState(credentials.username)
	const [password, setPassword] = useState(credentials.password)

	const handleSetPassword = (text) => {
		setPassword(text)
	}

	const handleSetUsername = (text) => {
		setUsername(text)
	}

	return (<Signup {...props} />)
}