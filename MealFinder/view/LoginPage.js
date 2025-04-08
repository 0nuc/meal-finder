import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Back, Connect, PasswordReset } from '../components/LoginSignButton';
import { Apple, Google } from '../components/SocialAuth';
import { authService } from '../lib/auth';

export function LoginPage({ navigation }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { data, error } = await authService.signIn(email, password);

    if (error) {
      Alert.alert('Erreur', error);
      return;
    }

    // Si connexion réussie
    Alert.alert('Succès', 'Connexion réussie!');
    navigation.navigate('Main');
  };

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          <Text style={styles.title}>Meal</Text>
          <Text style={styles.titlePartTwo}>Finder</Text>
        </Text>
        <Text style={styles.subtitle}>Connectez-vous pour accéder à votre compte</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Votre adresse email</Text>
          <TextInput
            style={styles.input}
            placeholder="exemple@mealfinder.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}     
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.inputLabel}>Votre mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="min. 8 caractères"         
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false} 
            value={password}
            onChangeText={setPassword}
          />
          <PasswordReset onPress={() => navigation.navigate('ResetPassword')} />
        </View>

        <Connect onPress={handleLogin}/>

        <Text style={styles.subtitle}>ou</Text>
        
        <Google/>
        <Apple/>
        <Back onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
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
    alignItems:'center',
    justifyContent:'flex-start',
  },
  inputContainer:{
    padding:20,
    justifyContent:'center',
    width:'100%',
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
    marginTop:15,
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
    borderRadius:100,
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
  }
});