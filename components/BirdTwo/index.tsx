import { View, Image } from 'react-native'
import { styles } from './styles'

type Props = {
  posX: number,
}

export function BirdTwo ({ posX }: Props) {
  return (
    <View style={[styles.bird2, {bottom: posX}]}>
      <Image style={styles.bird2}source={require('../../assets/flappy-bird-sprite-11549936843rfq2kg39db-removebg-preview.png')} />
    </View>
  )
}