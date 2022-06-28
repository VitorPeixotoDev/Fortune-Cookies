import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

const App = () => {
  const phrases = [
    'Sabedoria demais só traz aborrecimento',
    'Tudo que é útil não é belo',
    'Melhor sofrer por amor que nunca ter amado',
    'A felicidade está à mesma distância da euforia quanto da tristeza',
    'Só se realiza o impossível; realizar o possível é mera repetição'
  ]

  const [img, setImg] = useState(require('./assets/biscoito.png'))
  const [phrase, setPhrase] = useState('')

  const randomNumber = () => Math.floor(Math.random() * phrases.length)

  const breakCookie = number => {
      setPhrase(`" ${phrases[number]} "`)
      setImg(require('./assets/biscoitoAberto.png'))

      phrase.length > 0
      ? setPhrase('Peça um novo biscoito')
      : null

  }

  const newCookie = () => {
    setImg(require('./assets/biscoito.png'))
    setPhrase('')
  }

  return(
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.fortunePhrase}>{phrase}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => breakCookie(randomNumber()) }
      >
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>quebrar o biscoito!</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, {marginTop: 10}]}
        onPress={ newCookie }
      >
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>novo biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    height: 240,
    width: 240
  },
  fortunePhrase: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#dd7b22',
    margin: 10,
    textAlign: 'center'
  },
  button:{
    width: 240,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    marginTop: 30
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App