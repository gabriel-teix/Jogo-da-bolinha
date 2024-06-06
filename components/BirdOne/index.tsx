import { View, Image } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}

export function BirdOne ({ posY }: Props) {
  return (
    <View style={[styles.bird, {bottom: posY}]}>
      <Image style={styles.bird}source={require('../../assets/flappy-bird-sprite-11549936843rfq2kg39db-removebg-preview.png')} />
    </View>
  )
}