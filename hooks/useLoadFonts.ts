// src/hooks/useLoadFonts.ts

import { useFonts } from 'expo-font';

import React from 'react';

const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    'Satoshi-Black': require('@assets/fonts/Satoshi-Black.otf'),
    'Satoshi-BlackItalic': require('@assets/fonts/Satoshi-BlackItalic.otf'),
    'Satoshi-Bold': require('@assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-BoldItalic': require('@assets/fonts/Satoshi-BoldItalic.otf'),
    'Satoshi-Italic': require('@assets/fonts/Satoshi-Italic.otf'),
    'Satoshi-Light': require('@assets/fonts/Satoshi-Light.otf'),
    'Satoshi-Regular': require('@assets/fonts/Satoshi-Regular.otf'),
    'Satoshi-Medium': require('@assets/fonts/Satoshi-Medium.otf'),
  });

  return fontsLoaded;
};

export default useLoadFonts;
