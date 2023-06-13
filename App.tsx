import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import data from './src/data';
import Header from './src/components/Header';
import Item from './src/components/Item';

function App(): JSX.Element {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={(
          <Header text={text} onChangeText={onChangeText} />
        )}
        data={data.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase())
        )}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
});

export default App;
