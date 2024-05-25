import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, Dimensions} from 'react-native';
import appColors from '../Colors/Colors';
import { describe } from 'node:test';
import Carousel from 'react-native-snap-carousel';
import { Pagination } from 'react-native-snap-carousel';


// Datos de ejemplo
const data = [
  { id: '1', image: 'https://cdn1.coppel.com/images/catalog/mkp/1030/3000/10301632-1.jpg', price: '100' ,description: 'Perfume de 100ml'},
  { id: '2', image: 'https://cdn1.coppel.com/images/catalog/pr/7934272-1.jpg', price: '200' ,description: 'Perfume de 100ml'},
  { id: '3', image: 'https://cdn1.coppel.com/images/catalog/pr/7067752-1.jpg', price: '200' ,description: 'Perfume de 100ml'},
  { id: '4', image: 'https://cdn1.coppel.com/images/catalog/pr/7160692-1.jpg', price: '200' ,description: 'Perfume de 100ml'},
  { id: '5', image: 'https://cdn1.coppel.com/images/catalog/pr/7406722-1.jpg', price: '7200',description: 'Perfume de 100ml'},
  { id: '6', image: 'https://cdn1.coppel.com/images/catalog/pr/7498402-1.jpg', price: '1200',description: 'Perfume de 100ml'},
  { id: '7', image: 'https://cdn1.coppel.com/images/catalog/pr/7960052-1.jpg', price: '600' ,description: 'Perfume de 100ml'},
  { id: '8', image: 'https://cdn1.coppel.com/images/catalog/pr/7312882-1.jpg', price: '200' ,description: 'Perfume de 100ml'},
  // Agrega más elementos aquí
];

interface Item {
  image: string;
  price: number;
  description: string;
  id: string;
}
const processedData = data.map(item => ({
  ...item,
  price: Number(item.price),
}));
const sliderWidth = Dimensions.get('window').width
const itemWidth = Dimensions.get('window').width * 0.7;

export function HomeScreen() {
  
  const sliderWidth = 330; // replace with your value
  const itemWidth = 300; // replace with your value
  const renderItem = ({item, index}: {item: Item, index: number}) => {
    return (
      <View style={styles.carrouselCard}>
        <Image source={{ uri: item.image }} style={styles.carrouselImage} />
       
      </View>
    );
  }
  return (
    <View style={styles.container}>
     
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={2} // Número de columnas
            ListHeaderComponent={() => (
              <>
                <View style={styles.container}>
                  <Carousel
                    data={processedData}
                    renderItem={renderItem}
                    sliderWidth={sliderWidth} // replace with your value
                    itemWidth={itemWidth} // replace with your value
                    autoplay={true} // Habilita el autoplay
                    autoplayInterval={5000}
                    autoplayDelay={1000}
                    enableMomentum={true}
                  />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {data.map((item) => (
                    <View key={item.id} style={styles.scrollCard}>
                        <Image source={{ uri: item.image }} style={styles.scrollImage} />
                        <Text style={{fontSize: 20, color: appColors.primary, padding: 5, textAlign: 'center'}}>${item.price}MXN</Text>
                        <Text style={{fontSize: 10, color: appColors.white, paddingBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>{item.description}</Text>
                    </View>
                    ))}
                </ScrollView>
              </>
             
            )}
            renderItem={({ item }) => (
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={{fontSize: 25, color: appColors.price, padding: 5, textAlign: 'center'}}>${item.price}MXN</Text>
                <Text style={{fontSize: 20, color: appColors.white, paddingBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>{item.description}</Text>
            </View>
            )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    // Estilos de la grid list view
  container: {
    backgroundColor: appColors.secondary,
    flex: 1,
  },
  card: {
    backgroundColor: appColors.primary,
    flex: 1,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 130,
  },

  // Estilo de elemento de desplazamiento

  scrollCard: {
    backgroundColor: appColors.price,
    flex: 1,
    margin: 10,
    width: 150,
    height: 200,
  },
  scrollImage: {
    width: 150,
    height: 150,
  },

   // Estilo para el carrousel

   carrouselCard: {
    backgroundColor: appColors.price,
    flex: 1,
    margin: 10,
    width: sliderWidth, // use the sliderWidth variable
    height: 200,
  },
  carrouselImage: {
    width: itemWidth, // use the itemWidth variable
    height: 200,
  },
});