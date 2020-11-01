import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'quicksand-light': require('./assets/fonts/Quicksand-Light.ttf'),
  'quicksand-regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'quicksand-medium': require('./assets/fonts/Quicksand-Medium.ttf'),
  'quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}