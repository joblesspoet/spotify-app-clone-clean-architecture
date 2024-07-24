import React, { memo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { styles } from './ButtonPrimaryStyles';

type ButtonSize = 'small' | 'large';

interface ButtonPrimaryProps extends TouchableOpacityProps {
  title: string;
  onButtonPress: () => void;
  size?: ButtonSize;
}

const ButtonPrimary: React.FunctionComponent<ButtonPrimaryProps> = ({
  size = 'large',
  title,
  onButtonPress,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={(onButtonPress)} >
      <View style={[styles.container, size === 'large' ? styles.containerLarge : styles.containerSmall]}>
        <Text style={[styles.btnText, size === 'large' ? styles.btnLargeText : styles.btnSmallText]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default memo(ButtonPrimary);
