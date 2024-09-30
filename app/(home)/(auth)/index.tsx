import ButtonPrimary from '@components/Buttons/ButtonPrimary';
import LinkButton from '@components/Buttons/LinkButton';
import AppLogo from '@components/common/AppLogo';
import Spacer from '@components/common/Spacer';
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import BackButton from '@components/Buttons/BackButton';

const AuthHome = () => {
    const handleLoginAction = () => {
        console.log('called when singnin.')
    }
    const handleRegisterAction = () => {

    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('@assets/images/auth_home_two.png')} style={{position: 'absolute', zIndex: 120, right:0, top: -9.87, }} />
            <Image source={require('@assets/images/auth_home_one.png')} style={{position: 'absolute', zIndex: 130, right:0, bottom: 0}} />
            <View style={{marginLeft:30}}>
                <BackButton />
                </View>
            <Spacer size={120} type='vertical' />
            <View style={styles.childContainer}>
                <AppLogo height={73} width={324} />
                <Spacer size={20} type='vertical' />
                <Text style={styles.heading}>Enjoy Listening To Music</Text>
                <Spacer size={15} type='vertical' />
                <Text style={styles.subHeading}>Spotify is a proprietary Swedish audio streaming and media services provider</Text>

                <Spacer size={25} type='vertical' />    
                <View style={styles.buttonsContainer}>
                    <View style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                    <ButtonPrimary size='small' title='Register' onButtonPress={handleRegisterAction} />
                    <Spacer size={25} type='horizontal' />    
                    <LinkButton title="Sign in" onButtonPress={handleLoginAction} />
                    </View>
                </View>                
            </View>            
            <View style={{ flex: 1, justifyContent: 'flex-end', position:'absolute', zIndex:-8900, bottom:0, left:0}}>
                <Image source={require('@assets/images/auth_character.png')} style={{}} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    },
    childContainer: {
        flex:1
        
    },
    spacer: {
        marginTop: 30,
    },
    heading: {
        fontFamily: 'Satoshi-Bold',
        fontSize: 27,
        color: '#383838', 
        textAlign: 'center',
        
    },
    subHeading: {
        fontFamily: 'Satoshi-Regular',
        fontSize: 17,
        color: '#797979',
        textAlign: 'center',
        marginHorizontal:30,
        
    },
    buttonsContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        
    }
});
export default AuthHome;