import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import MonIcon from '@assets/images/Moon.svg';
import SunIcon from '@assets/images/sun.svg';

type ButtonChooseModeProps = {
    title: string;
    onButtonPress: (mode: string) => void;
    mode?: 'light' | 'dark';
}

const ButtonChooseMode: React.FC<ButtonChooseModeProps> = ({
    title, onButtonPress,
    mode = 'dark'
}) => {

    return (
        <TouchableOpacity onPress={() => onButtonPress(mode)}>
            <View style={{
                width: 100,
                alignItems: 'center'
            }}>
                <View style={{ justifyContent: 'center', backgroundColor: '#393337', borderRadius: 50, width: 73, height: 73, alignItems: 'center' }} >
                    {mode == 'dark' ? <MonIcon /> : <SunIcon />}
                </View>
                <Text style={{
                    marginTop: 10,
                    fontFamily: 'Satoshi-Medium',
                    fontSize: 17,
                    color: '#DADADA'

                }}> {title}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default ButtonChooseMode