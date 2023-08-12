import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerIcon} source={require('./assets/icon.png')}/>
          <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchBar} placeholder='Buscar'/>
          </View>
      </View>

      <View style={styles.content}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar1.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar2.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar3.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar4.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar5.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar8.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar9.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar10.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar2.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar3.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar4.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar5.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar2.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar3.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar4.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar5.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>


            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar2.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar3.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar4.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar5.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar2.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar3.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar4.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar5.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Image style={styles.cardHeaderIcon} source={require('./assets/profile-avatars/avatar6.png')}/>
                <Text style={styles.cardHeaderTitle}> Title card  :)</Text>
              </View>
              <View style={styles.cardBody}>
                <Text>Text body</Text>
              </View>
            </View>

           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
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
    padding: '2%'
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
    flex: 2,
    flexDirection: 'row'
  },
  content: {
    flex: 20
  }
});
