import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Login({onPress}){
  return(
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>Connectez-vous</Text>
    </TouchableOpacity>
  )
}

export function Sign({onPress}){
  return(
    <TouchableOpacity style={styles.buttonStyleSign} onPress={onPress}>
      <Text style={styles.buttonText}>Crée un compte</Text>
    </TouchableOpacity>
  )
}
// Dans LoginSignButton.js
export const Connect = ({ onPress }) => (
  <TouchableOpacity style={styles.buttonStyleConnect} onPress={onPress}>
    <Text style={styles.buttonText}>Se connecter</Text>
  </TouchableOpacity>
);
export function Creat({ onPress }) {
  return (
    <TouchableOpacity style={styles.buttonStyleConnect} onPress={onPress}>
      <Text style={styles.buttonTextConnect}>Créer un compte</Text>
    </TouchableOpacity>
  );
}
export function PasswordReset(){
  return(
    <TouchableOpacity>
      <Text style={styles.password}>Mot de passe oublier ?</Text>
    </TouchableOpacity>
  )
}

export function Back(){
  const navigation = useNavigation();

  return(
    <TouchableOpacity style={styles.buttonStyleRetour} onPress={() => navigation.goBack()}>
      <Text style={styles.buttonTextRetour}>Retour</Text>
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
  buttonStyleConnect:{
    width: '90%',
    padding: 20,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFCC00',
  },

  buttonTextConnect:{
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  password:{
    color:'#FFCC00',
    marginLeft:10,
    marginTop:5,
    opacity:0.7
  },
  buttonStyleRetour:{
    padding:20,
    marginTop:-10
   
  },
  buttonTextRetour:{
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  profilButton:{
    backgroundColor:'#FFCC00'},
    imgStyle:{
      position:'absolute',
      width:'100%',
      top:0
    }
    
});
