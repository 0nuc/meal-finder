import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',   
    justifyContent:'flex-end'
  },
})