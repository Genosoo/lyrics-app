import { View, Text, Image } from 'react-native'
import React from 'react'
import Background from '@/components/Background'

const About = () => {

  return (
    <Background>
       <View className='p-2 '>
         <View className='mt-5'>
             <Text className='text-4xl font-bold text-white text-center '>About</Text>
         </View>
      </View>
    </Background>
  )
}

export default About