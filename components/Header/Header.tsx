import BackButton from '@components/Buttons/BackButton';
import AppLogo from '@components/common/AppLogo';
import Spacer from '@components/common/Spacer';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignContent: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={styles.backButton}>
          <BackButton />
        </View>
        <Spacer type="horizontal" size={100} />
        <AppLogo width={108} height={33} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    marginLeft: 33,
  },
});
