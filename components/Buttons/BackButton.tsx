import React from 'react'
import { TouchableOpacity } from 'react-native'
import BackButtonWrapper from './BackButtonWrapper'
import Spacer from '@components/common/Spacer'
import { useRouter } from 'expo-router'


const BackButton = () => {
    const router = useRouter();
    const handleBackAction = () => {        
        if(router.canGoBack()) {
            router.back()
        }
    }
    return (
        <React.Fragment>
            <Spacer size={36} type='vertical' />
            <TouchableOpacity onPress={handleBackAction}>
                <BackButtonWrapper />
            </TouchableOpacity>
        </React.Fragment>
    )
}

export default BackButton