import * as Font from 'expo-font';

export const initFonts = async () => {
  await Font.loadAsync({
    'Roboto': require('../../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf')
  });
};
