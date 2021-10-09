import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Alert } from 'react-native';


import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    {id: 1, title: 'Milk'},
    {id: 2, title: 'Eggs'},
    {id: 3, title: 'Bread'},
    {id: 4, title: 'Juice'},
  ]);

  const addItem = (title) => {
    if(!title) {
      Alert.alert('Error', 'Please enter the item title', {text: 'OK'})
    } else {
      setItems(prevItems => {
        return[{id: Math.random(), title}, ...prevItems];
      })
    }
  }

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };


  return (
    <SafeAreaView>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
