import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export function Google() {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, styles.googleButton]} 
      >
        <Image
          source={require('../assets/googleLogo.png')}
          style={styles.iconeStyle}
        />
        <Text style={styles.buttonText}>Continuer avec Google</Text>
      </TouchableOpacity>
    </View>
  );
}

export function Apple() {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, styles.appleButton]} 
      >
        <Image
          source={require('../assets/appleLogo.png')}
          style={styles.iconeStyle}
        />
        <Text style={styles.buttonText}>Continuer avec Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 0,
  },
  button: {
    width: '90%',
    padding: 20,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#232323',
  },
  appleButton: {
    backgroundColor: '#292929',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  iconeStyle:{
    width:20,
    marginRight:10,
    height:20
  }
});