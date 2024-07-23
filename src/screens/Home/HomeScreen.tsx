import AppLogo from '@components/common/AppLogo'
import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <AppLogo />
    </View>
  )
}


export default HomeScreen