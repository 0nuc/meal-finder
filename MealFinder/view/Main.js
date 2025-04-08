import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Favourite } from '../components/mainComp';
export function Main(){

  
  return(
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.title}>Salut, User</Text>
        <Text style={styles.secondTitle}>Prêt à cuisiner ?</Text>
      </View>
      <TouchableOpacity style={styles.profilButton}>
        <Image
          style={styles.profilIcone}
          source={require('../assets/utilisateur.png')}
        />
      </TouchableOpacity>
      
    </View>
    <View style={styles.body}>
      <Favourite/>
    </View> 
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',   
    
  },
  header:{
    padding:30,
    width:'100%',
    height:'15%',
    marginTop:'12%',
    flexDirection:'row'
  },
  headerLeft:{
    flexDirection:'colum',
    // backgroundColor:'red'
  },
  body:{
    height:'100%',
    width:'100%',
    // backgroundColor:'red',
    alignItems:'center',
    marginTop:30,
    flexDirection:'column'
  },
  title:{
    color:'#fff',
    fontSize:40,
    fontWeight:'800',
  },
  secondTitle:{
    color:'#fff',
    fontSize:23,
    fontWeight:'200',
  },
  profilButton:{
    backgroundColor:'#FFCC00',
    height:75,
    width:75,
    marginLeft:'20%',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  profilIcone:{
    width:50,
    height:50
  }
  

});
