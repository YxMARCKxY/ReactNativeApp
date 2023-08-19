import { StyleSheet } from 'react-native';

//styles function
export function stylesApp() {
  
  return StyleSheet.create({
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
    },
    statusBar:{
      backgroundColor: '#ff0'
    }
  });
}

