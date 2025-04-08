import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Favourite(){
  return(
    <TouchableOpacity style={styles.favContainer}>
      <Text style={styles.title}>Vos recettes préféré</Text>
    </TouchableOpacity>
  )
}
// export function Filter(){
//   return(

//   )
// }

const styles = StyleSheet.create({

  favContainer:{
    padding:20,
    backgroundColor:'#232323',
    height:170,
    width:'90%',
    borderRadius:20
  },
  title:{
    color:'#FFF',
    fontWeight:'500',
    fontSize:'20'
  }

})