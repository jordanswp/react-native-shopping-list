import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

function AddItem({addItem}) {

    const [title ,setTitle] = useState('');
    const changeTextHandler = textValue => setTitle(textValue); 

    return (
        <View>
        <TextInput
        placeholder="Add Item"
        style={styles.input}
        onChangeText={changeTextHandler}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addItem(title)}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20 } /> Add Item
            </Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default AddItem;