import { useLocalSearchParams } from 'expo-router';
import { View , Text} from 'react-native';

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    // destructering th id 
    return (
        <View>
            <Text style={{ color:"#FFFFFF" }}>Product Details: {id}</Text>
        </View>
    );
};

export default ProductDetailsScreen;