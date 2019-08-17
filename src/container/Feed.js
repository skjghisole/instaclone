import React, { useState, useEffect } from 'react'
import { FlatList, Dimensions, View } from 'react-native'
import { Card } from '../components'

export default () => {
	const [products, setProducts] = useState([])
	const [refreshing, setRefresh] = useState(false)
	const [screenWidth] = useState(Dimensions.get('window').width)
	const getProducts = async () => {
		const resp = await fetch('http://shop.stockroomusa.com/api/products')
		const data = resp.json()
		return data
	}

	const handleSetProducts = () => {
		getProducts().then(({ data }) => {
			setProducts(data)
		})
	}

	useEffect(() => {
		handleSetProducts()
	}, [])

	const handleRefresh = () => {
		setRefresh(true)
		handleSetProducts()
		setRefresh(false)
	}

	return <FlatList
				data={products.sort((a, b) => {
					return b.createdAt > a.createdAt
				})}
				keyExtractor={(product) => product._id}
				renderItem={({ item: { imgSrc } }) => {
					return <Card
					src={imgSrc[0]}
					user={{
						username: 'Skjghisole',
						userpic: 'https://scontent.fmia1-1.fna.fbcdn.net/v/t1.0-9/67566949_10212755632000400_6457854045343186944_o.jpg?_nc_cat=108&_nc_oc=AQmYU1UM2fwc4FvsirPc8MxSaGl99qgHmAUCGnNKZk7XgzYbu-1cFOzvFdChWAZQRdJpp95HggDPEv99R6SjX3cN&_nc_ht=scontent.fmia1-1.fna&oh=b745d1e138c475070ac4749402b48f79&oe=5DE85333'
					}}
					screenWidth={screenWidth}
				/>
				}}
				refreshing={refreshing}
				onRefresh={handleRefresh}
			/>
}


