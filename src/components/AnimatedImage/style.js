export default (props) => ({
	opacity: props.opacity,
	transform: [
		{
			scale: props.opacity.interpolate({
				inputRange: [0, 1],
				outputRange: [0.1, 1]
			})
		}
	]
})