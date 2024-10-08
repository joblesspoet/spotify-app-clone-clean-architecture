import React from 'react';
import AppLogo from 'components/common/AppLogo';
import { ImageBackground, Platform, Text, View } from 'react-native';
import ButtonPrimary from 'components/Buttons/ButtonPrimary';
import ButtonChooseMode from 'components/Buttons/ButtonChooseMode';
import { styles } from '@styles/home/choosemode';
import { useRouter } from 'expo-router';

const ChooseMode = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.navigate('(auth)');
  };

  const handleButtonModeClick = (mode: string) => {
    console.log(mode);
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require('@assets/images/choose_mode.png')}
    >
      <View style={styles.container}>
        <AppLogo
          width={196}
          height={59}
          style={{ marginTop: Platform.OS == 'android' ? 10 : 35 }}
        />
        <View style={styles.containerBottom}>
          <View style={styles.chooseModeWrapper}>
            <Text style={styles.heading}>Choose Mode</Text>
            <View style={styles.buttonsContainer}>
              <ButtonChooseMode
                title="Dark Mode"
                onButtonPress={handleButtonModeClick}
              />
              <ButtonChooseMode
                title="Light Mode"
                mode="light"
                onButtonPress={handleButtonModeClick}
              />
            </View>
          </View>
          <ButtonPrimary onButtonPress={handleButtonClick} title="Continue" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ChooseMode;
