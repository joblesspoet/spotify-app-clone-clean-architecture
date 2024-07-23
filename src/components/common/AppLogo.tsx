import React from 'react';
import { SvgProps } from 'react-native-svg';
import Logo from '../../../assets/images/app_logo.svg';
import { StyleSheet, View } from 'react-native';

interface AppLogoProps extends SvgProps {
  width?: number;
  height?: number;
}

const AppLogo: React.FC<AppLogoProps> = ({ width = 196, height = 196, ...props }) => {
  return (
    <View style={styles.container}>
      <Logo width={width} height={height} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLogo;
