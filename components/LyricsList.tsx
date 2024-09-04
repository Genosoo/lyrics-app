import POPULAR_LYRICS from "@/constants/popular-gallery";
import { View, Text, Image, FlatList } from 'react-native';


interface LyricItem {
    id: number;
    title: string;
    lyrics: string;
    image: any;
  }
  

const LyricsList = () => {
    const renderItem = ({ item }:{ item: LyricItem } ) => (
        <View className="mb-5 bg-white p-2 rounded-2xl relative flex-1 justify-center items-center" >
          <Image source={item.image}  className="h-32 w-full  rounded-2xl" />
          <Text className="absolute text-3xl font-bold text-white">{item.title}</Text>
        </View>
      );
    
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={POPULAR_LYRICS[0].data} // Accessing the data array
          renderItem={renderItem} // Function to render each item
          keyExtractor={(item) => item.id.toString()} // Unique key for each item
        />
      );
}


  
  export default LyricsList;