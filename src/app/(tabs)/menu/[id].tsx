import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import products from '@assets/data/products';
import { defaultPizzaImage } from '@/components/ProductListItem';
import { useState } from 'react';
import Button from '@/components/Button';
const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    // destructering th id 

    const [selectedSize, setSelectedSize] = useState('S');

    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return <Text>Product Not Found!</Text>
    }

    const addToCart =() => {
        console.log("Adding to cart(Size):", selectedSize);
    }
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{ title: product.name }}
            />
            <Image
                source={{ uri: product.image || defaultPizzaImage }}
                style={styles.image}
            />

            <Text style={{ fontSize: 22, fontWeight: 'bold', }}>Select size:</Text>
            <View style={styles.sizes}>
                {sizes.map((size =>
                (
                    <Pressable
                        onPress={() => { setSelectedSize(size) }}
                        style={[styles.size, { backgroundColor: selectedSize === size ? '#D3EEFF' : 'white', }]} key={size}>
                        <Text style={[styles.sizeText, { color: selectedSize === size ? '#006EB1' : 'black', fontSize: selectedSize === size ? 21 : 16, fontWeight: selectedSize === size ? 900 : 300, }]}>{size}</Text>
                    </Pressable>
                )
                ))
                }
            </View>

            <Text style={styles.price}>${product.price}</Text>
            <Button onPress={addToCart} text="Add to cart"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 'auto',
    },
    sizes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 11,
    },
    size: {

        backgroundColor: 'gainsboro',
        width: 40,
        aspectRatio: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sizeText: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default ProductDetailsScreen;