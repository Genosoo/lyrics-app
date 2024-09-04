import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Pressable, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Background from '@/components/Background'
import AntDesign from '@expo/vector-icons/AntDesign';
import { songs, Song } from '@/constants/lyrics-data'
import { Link, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import LyricsBackground from '@/assets/images/lyrics-background.jpg'

const Lyrics = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSongPress = (song: Song) => {
    setSelectedSong(song)
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
    setSelectedSong(null)
  }

  return (
   <ImageBackground source={LyricsBackground} resizeMode='cover' className='flex-1 pt-10'>
     <View className='p-5 '>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </Pressable>

        <Text className='text-sm font-bold text-black my-3'>Choose a song lyrics</Text>
          <View className=''>
            <TextInput
              className='bg-[#818181ab]  rounded-full w-full p-3 border border-white'
              placeholder='Search song title...'
              placeholderTextColor={'#fff'}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

        <View className='mt-10 pb-10'>
          <Text className='text-black font-bold'>Songs List</Text>
        <ScrollView className='h-[80%] px-1'>
          {filteredSongs.map((song, index) => (
            <TouchableOpacity key={index} onPress={() => handleSongPress(song)}>
             <View className='bg-neutral-300 mt-3 rounded-3xl  h-[130px] relative'>
              <Image source={song.image} className='w-full h-full rounded-3xl' />
             <View className='absolute p-5 bg-[#0000004c]  top-5 left-5 rounded-xl'>
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
            <View className='flex-1 bg-[#fcfcfce3]'>
              <View className='flex-row items-center justify-between p-4'>
                <Text className='text-2xl font-bold text-black'>{selectedSong.title}</Text>
                <TouchableOpacity onPress={closeModal}>
                  <AntDesign name="closecircleo" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View className='p-4'>
                <Text className='mt-2 text-black text-base'>{selectedSong.lyrics}</Text>
              </View>
            </View>
          </Modal>
        )}
      </View>
   </ImageBackground>
  )
}

export default Lyrics
