import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Pressable, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { songs, Song } from '@/constants/lyrics-data'
import { Link, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import LyricsBackground from '@/assets/images/white-flower.jpg';
import { StatusBar } from 'expo-status-bar';
import Background from '@/components/Background';

const Lyrics = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const filteredSongs = songs
    .filter(song =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title)
      } else {
        return b.title.localeCompare(a.title)
      }
    })

  const handleSongPress = (song: Song) => {
    setSelectedSong(song)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedSong(null)
  }

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'))
  }

  return (
   <Background>
    <View className='p-5 '>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </Pressable>

        <Text className='text-sm font-bold text-black my-3'>Choose a song lyrics</Text>
          <View className=''>
            <TextInput
              className='bg-[#818181ab] rounded-full w-full p-3 border border-white'
              placeholder='Search song title...'
              placeholderTextColor={'#fff'}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <View className='mt-5 flex-row justify-between items-center'>
            <Text className='text-black font-bold'>Songs List</Text>
            <TouchableOpacity onPress={toggleSortOrder}>
              <AntDesign 
                name={sortOrder === 'asc' ? 'arrowup' : 'arrowdown'} 
                size={24} 
                color="black" 
              />
            </TouchableOpacity>
          </View>

        <View className='pb-20'>
        <ScrollView className='h-[73%] px-1'>
          {filteredSongs.map((song, index) => (
            <TouchableOpacity key={index} onPress={() => handleSongPress(song)}>
             <View className='bg-neutral-300 mt-3 rounded-3xl h-[130px] relative'>
              <Image source={song.image} className='w-full h-full rounded-3xl' />
             <View className='absolute p-5 bg-[#0000004c] top-5 left-5 rounded-xl'>
              <Text className='text-white text-lg font-bold'>{song.title}</Text>
              <Text className='text-white text-xs'>Author: {song.author}</Text>
             </View>
             </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        </View>

        {selectedSong && (
          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <ImageBackground source={selectedSong.image} resizeMode='cover' className='flex-1'>
            <View className='flex-1 bg-[#020202a8]'>
              <View className='flex-row items-center justify-between p-4'>
                <Text className='text-2xl font-bold text-white'>{selectedSong.title}</Text>
                <TouchableOpacity onPress={closeModal}>
                  <AntDesign name="closecircleo" size={24} color="#fff" />
                </TouchableOpacity>
              </View>

              <View className='p-4'>
                <Text className='mt-2 text-white text-base'>{selectedSong.lyrics}</Text>
              </View>
            </View>
            </ImageBackground>
          </Modal>
        )}
      </View>
   </Background>
  )
}

export default Lyrics
