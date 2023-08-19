import { Image, Text, View, FlatList } from 'react-native';
import { stylesApp } from "../assets/styles/styles.js";

//cardStruct-component
export function cardList() {

  const data = [
    {key: 1},
    {key: 2},
    {key: 3},
    {key: 4},
    {key: 5},
    {key: 6},
    {key: 7},
    {key: 8},
    {key: 9},
    {key: 10}
  ]

  const cardStruct = ({item}) => {
    const st = stylesApp()

    const images = [
      require('../assets/profile-avatars/avatar1.png'),
      require('../assets/profile-avatars/avatar2.png'),
      require('../assets/profile-avatars/avatar3.png'),
      require('../assets/profile-avatars/avatar4.png'),
      require('../assets/profile-avatars/avatar5.png'),
      require('../assets/profile-avatars/avatar6.png'),
      require('../assets/profile-avatars/avatar7.png'),
      require('../assets/profile-avatars/avatar8.png'),
      require('../assets/profile-avatars/avatar9.png'),
      require('../assets/profile-avatars/avatar10.png')
    ];

    return(
      <View style={st.card}>
        <View style={st.cardHeader}>
          <Image style={st.cardHeaderIcon} source={images[item.key-1]}/>
          <Text style={st.cardHeaderTitle}> Paflum Jasim Yala Title</Text>
        </View>

        <View style={st.cardBody}>
          <Text>Lorem Ipsum</Text>
        </View>
      </View>  
    );
  }

  return(
    <FlatList data={data} renderItem={cardStruct}/>
  )
}
