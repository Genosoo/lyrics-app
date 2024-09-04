import { View, Text, Image } from 'react-native'
import React from 'react'
// import LyricsList from '@/components/LyricsList'
import Background from '@/components/Background'
// import Logo from '@/assets/images/logo.jpg'

const Home = () => {
  
  return (
    <Background>
       <View className='p-2 '>
         <View className='mt-5'>
             <Text className='text-4xl font-bold text-white text-center '>Home</Text>
         </View>
      </View>
    </Background>
  )
}

export default Home