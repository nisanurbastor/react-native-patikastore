import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import products_data from './products_data.json';
import ProductsCard from './Components/ProductsCard/ProductsCard';

function App() {
  const renderProducts = ({ item }) => <ProductsCard products={item} />;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>PATIKASTORE</Text>
        <TextInput
              placeholder="Ara..."
              placeholderTextColor="gray"
              style={styles.search_bar}
            />
        </View>
        <View style={styles.inner}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          data={products_data}
          renderItem={renderProducts}
        />
        </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1
  },
  header:{
    flex:1
  },
  inner:{
    flex:5.5
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 45,
    color: '#622569',
  },
  search_bar: {
    backgroundColor: '#e0e0e0',
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
});
