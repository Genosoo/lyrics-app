import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Logo from "@/assets/images/logo.jpg"
import ImageBack from "@/assets/images/white-flower.jpg"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <View className="flex-1 items-center "> 
    <ImageBackground source={ImageBack} resizeMode='cover' className="w-full h-full" />
    <View className=' mt-10 p-2 w-full flex-1 items-center bg absolute'>
     <Text className='text-4xl font-extrabold text-neutral-800 text-center mt-10 mb-5'>Iglesia ng Dios kay Kristo Hesus</Text>
     <Image source={Logo} className="w-[280px] h-[200px]" />
    </View>
      {/* <Link href={"/(tabs)/home"} asChild className='absolute bottom-10 h-[100px] w-[100px] rounded-full border border-white'>
        <TouchableOpacity className="bg-[#0101014f] p-4  rounded-md flex-1 items-center justify-center">
          <MaterialCommunityIcons name="home" size={40} color="#fff" />
        </TouchableOpacity>
      </Link> */}

      <Link href={"/(tabs)/home"} asChild className='absolute bottom-10 rounded-full'>
        <TouchableOpacity className="bg-[#ffffff] p-4  rounded-md flex-1 items-center justify-center">
          <MaterialCommunityIcons name="home" size={40} color="black" />
        </TouchableOpacity>
      </Link>
      <StatusBar style="dark" />
    </View>
  )
}

export default App