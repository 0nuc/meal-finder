import React, { useState } from 'react'; // Correction de userState en useState
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Back, Connect, PasswordReset } from '../components/LoginSignButton';
import { Apple, Google } from '../components/SocialAuth';
import { supabase } from '../services/supabaseClient';

export function LoginPage({ navigation }){
  const [email, setEmail] = useState(''); // Correction de userState
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Correction de flase en false

  // Fonction de connexion
  const handleLogin = async () => {
    // Validation des champs
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Connexion réussie
      navigation.navigate('Home'); // Assurez-vous que cette route existe
    } catch (error) {
      Alert.alert('Erreur de connexion', error.message);
    } finally {
      setIsLoading(false);
    }
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
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}     
          />
          <Text style={styles.inputLabel}>Votre mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="min. 8 caractères"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false} 
          />
          <PasswordReset onPress={() => navigation.navigate('ResetPassword')} />
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color="#FFCC00" />
        ) : (
          <Connect onPress={handleLogin} />
        )}

        <Text style={styles.subtitle}>ou</Text>
        
        <Google 
          onPress={async () => {
            try {
              const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google'
              });
              if (error) throw error;
            } catch (error) {
              Alert.alert('Erreur', error.message);
            }
          }}
        />
        
        <Apple 
          onPress={async () => {
            try {
              const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'apple'
              });
              if (error) throw error;
            } catch (error) {
              Alert.alert('Erreur', error.message);
            }
          }}
        />
        
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
    // backgroundColor:'#FFF',
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
