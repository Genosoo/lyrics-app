import { Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const TabLayout = () => {
  return (
      <Tabs screenOptions={{ 
          headerShown: false, 
          tabBarLabel: () => null,
          tabBarStyle: {
            height: 60,
            borderRadius:50,
            margin: 10,
            position: 'absolute',
            bottom: 0,
            left: 10,
            right: 10,
            elevation: 0,
            backgroundColor: '#fff',
          }
       }} >
      <Tabs.Screen 
        name="home/index" 
        options={{ 
          title: "Home",
          headerShown: false, 
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} /> 
          }}
      />
      <Tabs.Screen 
        name="lyrics/index" 
        options={{ 
          headerShown: false,
          title: "Songs",
          tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={24} color={color} />
        }} 
      />
       <Tabs.Screen 
        name="video/index" 
        options={{ 
          headerShown: false,
          title: "Video",
          tabBarIcon: ({ color }) => <Entypo name="folder-video" size={24} color={color} />
        }} 
      />
        <Tabs.Screen 
        name="about/index" 
        options={{ 
          headerShown: false,
          title: "About",
          tabBarIcon: ({ color }) => <FontAwesome6 name="book" size={24} color={color} />
        }} 
      />
    </Tabs>
  )
}

export default TabLayout