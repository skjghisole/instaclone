import React, { useState, useEffect } from 'react'
import { View, Button } from 'react-native'
import * as Constants from 'expo-constants'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import style from './style'

export default () => {
  const getPermissionAsync = async () => {
    if (Constants.default.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
  };

  useEffect(() => {
  	getPermissionAsync()
  }, [])

	return (
		<View style={style.signupContainer}>
			<Button
				title={'Upload Profile Picture'}
				onPress={pickImage}
			/>
		</View>
	)
}