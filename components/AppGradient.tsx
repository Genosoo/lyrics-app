import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Content from './Content'
import { StatusBar } from 'expo-status-bar';

interface IProps {
    children: React.ReactNode;
    colors: string[];
}

const AppGradient = ({ children, colors }: IProps ) => {
  return (
   <LinearGradient colors={colors} className='flex-1'>
     <Content>
       {children}
       <StatusBar style="light" />
     </Content>
   </LinearGradient>
  )
}

export default AppGradient