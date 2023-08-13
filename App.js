import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  

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
    const images = [
      require('./assets/profile-avatars/avatar1.png'),
      require('./assets/profile-avatars/avatar2.png'),
      require('./assets/profile-avatars/avatar3.png'),
      require('./assets/profile-avatars/avatar4.png'),
      require('./assets/profile-avatars/avatar5.png'),
      require('./assets/profile-avatars/avatar6.png'),
      require('./assets/profile-avatars/avatar7.png'),
      require('./assets/profile-avatars/avatar8.png'),
      require('./assets/profile-avatars/avatar9.png'),
      require('./assets/profile-avatars/avatar10.png')
    ];

    return(
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.cardHeaderIcon} source={images[item.key-1]}/>
          <Text style={styles.cardHeaderTitle}>ZEN APP CARD TITLE</Text>
        </View>

        <View style={styles.cardBody}>
          <Text>Some text here</Text>
        </View>
      </View>  
    );
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.logoAndBarContainer}>
            <Image style={styles.headerIcon} source={require('./assets/icon.png')}/>
            <View style={styles.searchBarContainer}>
                <TextInput style={styles.searchBar} placeholder='Buscar'/>
            </View>
          </View>
        </ScrollView>
      </View>
      
      <View style={styles.content}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.cardContainer}>
            <FlatList data={data} renderItem={cardStruct}/>
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 40,
    padding: '2%'
  },
  title: {
    fontFamily: 'serif',
    textAlign: 'center'
  },
  headerIcon: {
    width: '17%',
    height: '100%'
  },
  searchBarContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    paddingRight: '1%'
  },
  searchBar:{
    backgroundColor: '#ebece9',
    borderRadius: 5,
    width: '100%',
    height: '100%',
    fontSize: 20,
    paddingLeft: 7
  },
  cardContainer:{
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: '1%'
  },
  card:{
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#ebece9',
    borderRadius: 5,
    padding: '1%'
  },
  cardHeader:{
    flex: 2,
    flexDirection: 'row',
    padding: '0.5%'
  },
  logoAndBarContainer:{
    flex: 1,
    flexDirection: 'row'
  },
  cardBody:{
    flex: 5,
    flexDirection: 'column'
  },
  cardHeaderIcon:{
    width: '5%',
    height: '100%',
  },
  cardHeaderTitle:{
    flex: 4
  },
  header:{
    flex: 2
  },
  content: {
    flex: 21
  }
});
