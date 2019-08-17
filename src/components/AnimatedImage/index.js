import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'
import style from './style'

export default (props) => {
	const [opacity, setOpacity] = useState(new Animated.Value(0))

	const onLoad = () => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 250,
			useNativeDriver: true
		}).start()

		setTimeout(() => Animated.timing(opacity, {
			toValue: 0,
			duration: 250,
			useNativeDriver: true
		}).start(), 1000)
	}

	return (<Animated.Image
		onLoad={onLoad}
		{...props}
		style={[
			style({ opacity }),
			props.style
		]}
	/>)
}