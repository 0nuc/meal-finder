import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonNext(){
  return(
    <TouchableOpacity 
      style={styles.buttonStyle} 
      onPress={() => navigation.popTo('Login')}
    >
      <Text style={styles.buttonText}>Commencez maintenant</Text>
      <Image
      source={require('../assets/arrowButton.png')}
      style={styles.arrowButton}
      />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
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

});
