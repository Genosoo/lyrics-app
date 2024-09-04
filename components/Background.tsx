import React from 'react'
import Content from './Content'
import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import ImageBack from "@/assets/images/white-flower.jpg"

interface IProps {
    children: React.ReactNode;
}

const Background = ({ children }: IProps ) => {
  return (
     <ImageBackground source={ImageBack} resizeMode='cover' className='flex-1'>
        <Content>
        {children}
        <StatusBar style="dark" />
        </Content>
     </ImageBackground>
  )
}

export default Background