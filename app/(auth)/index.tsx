import ButtonPrimary from '@components/Buttons/ButtonPrimary';
import LinkButton from '@components/Buttons/LinkButton';
import AppLogo from '@components/common/AppLogo';
import Spacer from '@components/common/Spacer';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import BackButton from '@components/Buttons/BackButton';

const AuthHome = () => {
    const handleLoginAction = () => {

    }
    const handleRegisterAction = () => {

    }
    return (
        <View style={styles.container}>
            <BackButton />
            <Image source={require('@assets/images/auth_home_two.png')} style={{position: 'absolute', zIndex: 120, right:0, top: -9.87}} />
            <Image source={require('@assets/images/auth_home_one.png')} style={{position: 'absolute', zIndex: 130, right:0, bottom: 0}} />
            <View style={styles.childContainer}>
            <Spacer size={120} type='vertical' />
                <AppLogo height={73} width={324} />
                <Spacer size={20} type='vertical' />
                <Text style={styles.heading}>Enjoy Listening To Music</Text>
                <Spacer size={15} type='vertical' />
                <Text style={styles.subHeading}>Spotify is a proprietary Swedish audio streaming and media services provider</Text>
                <Spacer size={15} type='vertical' />
                <View style={styles.buttonsContainer}>
                    <ButtonPrimary size='small' title='Register' onButtonPress={handleRegisterAction} />
                    <Spacer size={25} type='horizontal' />    
                    <LinkButton title="Sign in" onButtonPress={handleLoginAction} />
                </View>                
            </View>            
            <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                <Image source={require('@assets/images/auth_character.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    childContainer: {
        zIndex: 100, position: 'absolute',  alignItems: 'center',  flex: 1 ,alignSelf: 'center'
    },
    spacer: {
        marginTop: 30,
    },
    heading: {
        fontFamily: 'Satoshi-Bold',
        fontSize: 27,
        color: '#383838',
        textAlign: 'center'
    },
    subHeading: {
        fontFamily: 'Satoshi-Regular',
        fontSize: 17,
        color: '#797979',
        textAlign: 'center',
        marginHorizontal:10
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
export default AuthHome;