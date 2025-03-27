import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Login, Sign } from '../components/LoginSignButton';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/foodOne.jpg')}
        style={styles.imgStyle}
      />
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Commencez à suivre ce qui vous intéresse</Text>
        <Text style={styles.subtitle}>Créez un compte pour enregistrer les recettes qui vous donnent envie</Text>
        <Login  onPress={() => navigation.navigate('LoginPage')}/>
        <Sign  onPress={() => navigation.navigate('SignPage')}/>
          {/* <TextInput
            placeholder='Email'
            style={styles.input}
          />
          <TextInput
            placeholder='Password'
            style={styles.input}
          /> */}
      </SafeAreaView>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',   
    justifyContent:'flex-end'
  },
  header:{
    backgroundColor:'#232323',
    width:'100%',
    height:'55%',
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,

  },

  title:{
    padding:10,
    color:'#fff',
    fontSize:27,
    fontWeight:'600',
    textAlign:'center',
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
    fontWeight:'100',
  },

  input:{
    margin:20,
    width:'70%',
    height:50,
    padding:10,
    fontSize:16,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  imgStyle:{
    position:'absolute',
    width:'100%',
    top:0
  }
  
});
