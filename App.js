import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function App() {
  const [contador, setContador] = useState(0);

  const incremento = () => {
    setContador(contador + 1);
  };

  const decremento = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      showToast();
    }
  };

  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'Aviso',
      text2: 'Impossível decrementar abaixo de zero',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={incremento} style={styles.button}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decremento} style={styles.button}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Decrementar</Text>
      </TouchableOpacity>
      <Text>Contador: {contador}</Text>
      <StatusBar style="auto" />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d7d7d7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 10,
    width: 150,
    margin: 10,
  },
});
