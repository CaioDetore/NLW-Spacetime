import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import blurBg from './scr/assets/blur.png';
import Stripes from './scr/assets/stripes.svg';
import NlwLogo from './scr/assets/nlw-logo.svg';

const StyledStripe = styled(Stripes)

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'
import { styled } from 'nativewind';

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className='bg-gray-900 relatuve flex-1 px-8'
      imageStyle={{ position: 'absolute', left: '-100%'}}>
      <StyledStripe className='absolute left-2' />

      <View className='flex-1 items-center justify-center gap-6'>
        <NlwLogo />

        <View className='space-y-2'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>Sua cápsula do tempo</Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
        >
          <Text className="font-alt text-sm uppercase text-black">Cadastrar Lembraça</Text>
        </TouchableOpacity>

      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-200 py-10'>Feito com 💜 no NLW da Rocketseat</Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
