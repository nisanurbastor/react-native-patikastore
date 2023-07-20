import {
  View,
  Text,
  Image
} from 'react-native'

import styles from './ProductsCard.style'

const ProductsCard = ({products}) => {

  const inStock = products.inStock

  return (
    <View style={styles.container}>
    <Image style={styles.image} 
      source={{uri: products.imgURL}}
    />
    <Text style={styles.title}>{products.title} </Text>
    <Text style={styles.price}>{products.price} </Text>  
    <Text style={styles.inStock}>
      {inStock ? 'STOKTA YOK' : ''}
   </Text>  

   </View>
  )
} 

export default ProductsCard;