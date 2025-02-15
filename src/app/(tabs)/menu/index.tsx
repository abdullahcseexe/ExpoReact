import Colors from '@constants/Colors';
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';
import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem'



export default function TabOneScreen() {
  return (
    <View>
      {/*<ProductListItem product={products[0]} />
      <ProductListItem product={products[1]/>*/}

      <FlatList
      data={products}
      renderItem={({item}) => <ProductListItem product={item}/> }
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10}}
      columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
}

;
