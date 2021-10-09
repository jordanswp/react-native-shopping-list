import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Shopping List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: 'darkslateblue',
        padding: 15
    },

    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    }
    
});

export default Header;