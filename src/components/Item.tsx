import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

type ItemProps = {
  item: {
    id: number,
    title: string,
    price: string,
    imgURL: string,
    inStock: boolean,
  }
}
function Item({ item }: ItemProps): JSX.Element {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: item.imgURL,
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      {!item.inStock && (
        <Text style={styles.stock}>STOKTA YOK</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    margin: 4,
    backgroundColor: '#ECEFF1',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  },
  stock: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
});



export default Item