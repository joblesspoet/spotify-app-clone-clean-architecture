import React from 'react'
import {ImageBackground, Platform, StyleSheet, Text, View } from 'react-native'
import AppLogo from 'components/common/AppLogo'
import ButtonPrimary from 'components/Buttons/ButtonPrimary'
import { styles } from '@styles/home/getstarted'
import { useRouter } from 'expo-router'

const GetStarted = () => {
    const router = useRouter()
    const handleButtonClick = () => {
        console.log('button pressed.')
         router.navigate('(home)/choosemode');
    }
    return (
        <ImageBackground style={styles.background} source={require("@assets/images/get_started_background.png")}  >
            <View style={styles.container}>
                <AppLogo width={196} height={59} style={{ marginTop: Platform.OS == 'android' ? 10: 35 }} />
                <View style={styles.containerBottom}>
                    <Text style={styles.heading}>Enjoy Listening To Music</Text>
                    <View style={styles.subheadingContainer}>
                        <Text style={styles.subheading}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus.
                            Cursus ornare id scelerisque aliquam.
                        </Text>
                    </View>
                    <ButtonPrimary onButtonPress={handleButtonClick} title='Get Started' />
                </View>
            </View>
        </ImageBackground>
    )
}



export default GetStarted