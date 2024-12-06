import { Pressable, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';
import { Product } from "@assets/types"
import { Link } from 'expo-router';
export const defaultPizzaImage = 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg'

type ProductListItemProps = {
    product: Product;
}

 const ProductListItem = ( {product}: ProductListItemProps ) => {
    return(
      <Link href={`/(tabs)/menu/${product.id}`} asChild> 
      {/* product.id is used to go details of unique item in the list */}
      {/* asChild is imp for styles to reflected on Link from View */}
      <Pressable  style={styles.container}>
        <Image 
        source={{uri: product.image || defaultPizzaImage}} 
        style={styles.image} 
        resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
      {/* View replaced with Pressable becoz View do not support onPress Event */}
      </Link>
    );
  };

export default ProductListItem; 


  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 20,
      flex: 1,
      maxWidth: '50%',
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