import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import BackButtonWrapper from './BackButtonWrapper'
import { useRouter } from 'expo-router'


const BackButton = () => {
    const router = useRouter();
    const handleBackAction = () => {   
        if(router.canGoBack()){
            router.back()
        }
        
    }
    return (
            <Pressable style={{width:32, height:32}} onPress={handleBackAction}>
                <BackButtonWrapper />
            </Pressable>
    )
}

export default BackButton