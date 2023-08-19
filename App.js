import { stylesApp } from "./assets/styles/styles.js";
import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, ScrollView, Text, View } from 'react-native';
import { cardList } from "./components/card-list.js";


export default function App() {
  const st = stylesApp()

  return (
    <View style={st.container}>
      <View style={st.header}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={st.logoAndBarContainer}>
            <Image style={st.headerIcon} source={require('./assets/icon.png')}/>
            <View style={st.searchBarContainer}>
                <TextInput style={st.searchBar} placeholder='Buscar'/>
            </View>
          </View>
        </ScrollView>
      </View>
      
      <View style={st.content}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={st.cardContainer}>{cardList()}</View>
          <StatusBar style={st.statusBar} />
        </ScrollView>
      </View>
    </View>
  );
}