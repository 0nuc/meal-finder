import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonNext({ onPress }){
  return(
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>Commencez</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonStyle:{
    alignItems:'center',
    flexDirection:'row',
    marginTop:80,
    backgroundColor:'#D69E04',
    padding:25,
    borderRadius:50,
  },
  buttonText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'300'
  },


});
