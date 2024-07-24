import AppLogo from 'components/common/AppLogo'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const navigation = useRouter()

  useEffect(() => 
    {
      setTimeout(() => {
        navigation.navigate('(home)/getstarted');
      }, 5000);
    }, [navigation])

  return (
    <View style={styles.container}>
        <AppLogo />
    </View>
  )
}


export default SplashScreen