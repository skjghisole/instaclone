import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import AnimatedImage from '../AnimatedImage'
import style from './style'
import config from '../../config'

export default Card = ({ src, user, screenWidth }) => {
	const [lastPress, setLastPress] = useState(0)
	const [liked, setLike] = useState(false)

	const handleLikeToggle = () => {
		setLike(true)
		setTimeout(() => setLike(false), 1200)
	}

	const handleDoubleTap = () => {
		const delta = new Date().getTime() - lastPress
		return delta < 400 ? handleLikeToggle() : setLastPress(new Date().getTime())
	}

	return (
		<View style={style.cardContainer}>
			<View style={style.userInfoContainer}>
				<View style={style.userInfo}>
					<Image style={style.userPic} source={{ uri: user.userpic }} />
					<Text style={style.username}>
						{user.username}
					</Text>
				</View>
				<View style={style.optionContainer}>
					<Text style={style.option}>
						...
					</Text>
				</View>
			</View>
			<View style={style.contentImageContainer}>
				<TouchableOpacity onPress={handleDoubleTap} activeOpacity={0.6}>
					<ImageBackground style={[style.contentImg(screenWidth), { alignItems: 'center', justifyContent: 'center' }]} source={{ uri: src }}>
						<View>
						{liked && <AnimatedImage source={config.icons.likeIcon.source} style={config.icons.likeIcon.style}/>}
						</View>
					</ImageBackground>
				</TouchableOpacity>
			</View>
		</View>
	)
}