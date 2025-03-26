import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Login(){
  return(
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Connectez-vous</Text>
    </TouchableOpacity>
  )
}

export function Sign(){
  return(
    <TouchableOpacity style={styles.buttonStyleSign}>
      <Text style={styles.buttonText}>Crée un compte</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:"center",
    marginTop:20,
    width:'85%',
    backgroundColor:'#D69E04',
    padding:20,
    borderRadius:50,
  },
  buttonText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'300'
  },
  buttonStyleSign:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:"center",
    marginTop:20,
    width:'85%',
    backgroundColor:'#2F2E2E',
    padding:20,
    borderRadius:50,
  },

});
