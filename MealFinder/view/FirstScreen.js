import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import ButtonNext from '../components/buttonNext';


export default function FirstScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Image 
        source={require('../assets/cooking.png')}
        style={styles.imgStyle}
      />
      </View> 
      <Text>
        <Text style={styles.title}>Meal</Text>
        <Text style={styles.titlePartTwo}>Finder</Text>
      </Text>
      <Text style={styles.subtitle}>Trouvé des repas sain pour atteindre votre objéctif</Text>
      <ButtonNext onPress={() => navigation.navigate('Home')} />
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

  headerContainer:{
    // backgroundColor:'#FFCC00',
    width:'100%',
    height:'40%',
    marginTop:0,
    alignItems:'center',
    marginBottom:30,
    justifyContent:'center',
  },
  imgStyle:{
    paddingTop:50,
    width:'120%',
    height:'120%'
  }
  // headerLogo:{
  //   marginTop:'auto',
  //   width:130,
  //   height:130,
  //   backgroundColor:'#2F2E2E',
  //   borderRadius:100,
  // }

  
  
});
