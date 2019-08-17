import { StyleSheet } from 'react-native'

export default style = StyleSheet.create({
	cardContainer: {
		paddingBottom: 20
	},
	contentImageContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentImg: (width) => ({
		width,
		height: width * 1.10 //10%
	}),
	userInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		height: 50,
		paddingHorizontal: 10,
		backgroundColor: 'rgb(255,255,255)'
	},
	userPic: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	userInfo: {
		alignItems: 'center',
		flexDirection: 'row'
	},
	optionContainer: {
		// alignItems: 'center'
	},
	option: {
		fontSize: 30
	},
	username: {
		marginLeft: 10
	}
})