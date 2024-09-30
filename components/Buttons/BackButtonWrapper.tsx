import React from 'react'
import { StyleSheet, View } from 'react-native'
import LeftBackIcon from '@assets/images/lef_icon.svg';

const BackButtonWrapper = () => {
    return (
        <View style={styles.container}>
            <LeftBackIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8E8E8', 
        
        width: 32, 
        height: 32, 
        borderRadius: 16
    }
})

export default BackButtonWrapper