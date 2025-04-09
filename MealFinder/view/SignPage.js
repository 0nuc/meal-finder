import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Back, Creat } from '../components/LoginSignButton';
import { Google } from '../components/SocialAuth';
import { supabase } from '../lib/supabase';


export function SignPage(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password || !firstName || !lastName) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName
          }
        }
      });

      if (error) throw error;
      
      Alert.alert('Succès', 'Compte créé avec succès! Veuillez vérifier votre email.');
    } catch (error) {
      Alert.alert('Erreur', error.message);
    }
  };

  return(
  <View style={styles.container}>
    <View style={styles.header}>
      <Text>
        <Text style={styles.title}>Meal</Text>
        <Text style={styles.titlePartTwo}>Finder</Text>
      </Text>
      <Text style={styles.subtitle}>Crée vous un compte pour commencez dès maintenant</Text>
    </View>
    <Google/>

    <View style={styles.body}>
      <View style={styles.inputContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.nameInput}>
            <Text style={styles.inputLabel}>Nom de famille</Text>
            <TextInput
            style={styles.input}
            placeholder="Nom"
            value={lastName}
            onChangeText={setLastName}
            autoCorrect={false}     
            />
          </View>
          <View style={styles.nameInputPrenom}>
          <Text style={styles.inputLabel}>Votre Prenom</Text>
            <TextInput
            style={styles.input}
            placeholder="Prenom"
            value={firstName}
            onChangeText={setFirstName}
            autoCorrect={false}     
            />
          </View>
        </View>
        <Text style={styles.inputLabel}>Votre adresse email</Text>
        <TextInput
          style={styles.input}
          placeholder="exemple@mealfinder.com"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}     
          />
          <Text style={styles.inputLabel}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="min. 8 caractères"
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            autoCorrect={false}     
            />
      </View>
      <Creat onPress={handleSignUp}/>
    
      <View style={styles.bottomButton}>
       <Back/>
      </View>
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
    width:'100%',
    height:'15%',
    marginTop:'30%',
    alignItems:'center',
    justifyContent:'center',


  },
  body:{
    height:'100%',
    width:'100%',
    // backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent:'flex-start',
    
  },
  inputContainer:{
    padding:20,
    justifyContent:'center',
    width:'100%',

  },
  nameInput:{
    flexDirection:'column'
  },

  title:{
    padding:10,
    color:'#fff',
    fontSize:50,
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
    marginTop:5,
    marginBottom:15,
    color:'#fff',
    fontSize:20,
    textAlign:"center",
    fontWeight:'100',
  },

  input:{
    marginTop:10,
    borderWidth: 2,
    width:'100%',
    height:65,
    padding:20,
    color:'#2F2E2E',
    fontSize:16,
    backgroundColor:'#fff',
    borderColor:'#fff',
    borderRadius:30,
    fontWeight:'300',
    fontStyle:'italic',
  },
  imgStyle:{
    position:'absolute',
    width:'100%',
    top:0
  },
 inputLabel:{
  marginTop:10,
  marginLeft:10,
  color:'#fff',
  fontSize:16,
  fontWeight:'400',
  marginBottom:5,
 },
 bottomButton:{
  marginTop:'0%'
 },
 nameContainer:{
  flexDirection:'row',
  width:'100%'
 },
 nameInput:{
  width:'45%',
  
 },
 nameInputPrenom:{
  width:'45%',
  marginLeft:'10%'
  
 }
 

});
