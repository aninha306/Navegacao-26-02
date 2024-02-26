import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Inicío")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}
