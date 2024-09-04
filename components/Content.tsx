import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


interface IProps {
    children: React.ReactNode
}

const Content = ({ children } : IProps) => {
  return (
   <SafeAreaView className='flex-1 py-3 bg-[#07070726] '>
     {children}
   </SafeAreaView>
  )
}

export default Content