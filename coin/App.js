import { FlatList, Platform, SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { Item } from './src/components/Item';


export default function App() {
  const [data, setData] = useState([{}]);

  const getData = async () => {
    try {
      const res = await fetch('https://rest.coinapi.io/v1/exchanges?apikey=B1F7E5B6-2DFB-4B99-8151-A2B9F45038BF');
      const dataRes = await res.json();
      setData(dataRes);
      console.log(dataRes);
    } catch (error) {
      alert('Error al consultar la api');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.exchange_id}
        renderItem={({ item }) => (
          <View>
            <Item item={item} />
          </View>
        )}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  list: {
    width: '100%',
  },
});