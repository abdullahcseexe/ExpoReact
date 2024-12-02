import { Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import { Product } from "@/assets/types"

export const defaultPizzaImage = 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg'

type ProductListItemProps = {
    product: Product;
}

 const ProductListItem = ( {product}: ProductListItemProps ) => {
    return(
    <View style={styles.container}>
        <Image 
        source={{uri: product.image || defaultPizzaImage}} 
        style={styles.image} 
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    );
  };

export default ProductListItem; 


  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    title:{
      fontSize: 20,
      fontWeight: '700',
      marginVertical: 10,
    },
    price:{
      color: Colors.light.tint,
      fontWeight: 'bold',
    },
    image:{
      width: '100%',
      aspectRatio: 1,
    }
  }
);