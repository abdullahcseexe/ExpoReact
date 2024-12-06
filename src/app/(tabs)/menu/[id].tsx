import { Stack, useLocalSearchParams } from 'expo-router';
import { View , Text} from 'react-native';

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    // destructering th id 
    return (
        <View>
            <Stack.Screen 
            options={{ title: 'Details ' + id}}
            />
            <Text style={{ color:"#FFFFFF" }}>Product Details: {id}</Text>
        </View>
    );
};

export default ProductDetailsScreen;