import { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { styles } from './styles'
import { BirdOne } from './components/BirdOne/index'
import { BirdTwo } from './components/BirdTwo/index'

let timer: number
let timer2: number

export default function App() {
  // Valor da gravidade da Terra
  const [gravity, setGravity] = useState(0.98)

  const [upForce, setUpForce] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [posY, setPosY] = useState(0)

  // Efeito colateral
  useEffect(() => {
    const applyGravity = () => {
      // ecremento da gravidade
      let newUpForce = upForce - gravity
      newUpForce = newUpForce < 0 ? 0 : newUpForce
      setUpForce(newUpForce)

      // modificador da velocidade
      let newSpeed = speed + (gravity - (newUpForce / 2))
      setSpeed(newSpeed)

      // cálculo da posição a bolinha
      let newPosY = posY - newSpeed

      if (newPosY < 0) {
        newPosY = 0
        setSpeed(0)
      }
      setPosY(newPosY)
    }

    clearTimeout(timer)

    timer = setTimeout(applyGravity, 30)
  }, [gravity, upForce, speed, posY])

  const handleForceButton = () => {
    setUpForce(6)
  }

  const handleForceButton2 = () => {
    setUpForce(6)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <ImageBackground source={require('./assets/cenario_8_bit_by_bahamute01-d8qr0uf.jpg')} style={styles.cenario} />
        <BirdOne posY={posY}/>
        <BirdTwo posX={posY}/>
      </View>

      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>Up Force: {upForce.toFixed(2)}</Text>
          <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
        </View>

        
        <TouchableOpacity 
          style={styles.controlButton}
          onPress={handleForceButton}
        >
          <Text style={styles.controlText}>CLICK</Text>
        </TouchableOpacity>

         <TouchableOpacity 
          style={styles.controlButton2}
          onPress={handleForceButton2}
        >
          <Text style={styles.controlText2}>CLICK</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}