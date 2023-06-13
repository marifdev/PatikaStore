import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

type HeaderProps = {
  text: string,
  onChangeText: (text: string) => void,
}
const Header = ({ text, onChangeText }: HeaderProps) => {
  // const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Ara...'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    marginBottom: 4,
    marginHorizontal: 4,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800080',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ECEFF1',
    padding: 8,
    borderRadius: 8,
  },
});

export default Header