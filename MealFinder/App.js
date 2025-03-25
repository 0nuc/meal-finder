import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonNext from './components/buttonNext';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <View style={styles.headerLogo}></View> */}
      </View>
      <Text>
        <Text style={styles.title}>Meal</Text>
        <Text style={styles.titlePartTwo}>Finder</Text>
      </Text>
      <Text style={styles.subtitle}>Trouvé des repas sain pour atteindre votre objéctif</Text>
      <ButtonNext/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#fff',
    fontSize:50,
    fontWeight:'800',
  },
  titlePartTwo:{
    color:'#FFCC00',
    fontSize:50,
    fontWeight:'800',
  },
  subtitle:{
    margin:30,
    color:'#fff',
    fontSize:20,
    textAlign:"center",
    fontWeight:'600',
  },
  buttonStyle:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:100,
    backgroundColor:'#D69E04',
    padding:15,
    borderRadius:50,
  },
  buttonText:{
    color:'#fff',
    fontSize:15,
    fontWeight:'500'
  },
  arrowButton:{
    marginTop:3,
    width:30,
    height:30,
  },
  headerContainer:{
    backgroundColor:'#FFCC00',
    width:'100%',
    height:'40%',
    marginTop:-120,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
    alignItems:'center',
    marginBottom:100,
    justifyContent:'center',
  },
  // headerLogo:{
  //   marginTop:'auto',
  //   width:130,
  //   height:130,
  //   backgroundColor:'#2F2E2E',
  //   borderRadius:100,
  // }

  
  
});
