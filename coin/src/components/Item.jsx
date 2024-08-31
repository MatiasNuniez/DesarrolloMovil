import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Item = (props) => {
    const item = props.item;
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.text}>Volumen de operación (1 hora): {item.volume_1hrs_usd} USD</Text>
            <Text style={styles.text}>Volumen de operación (día): {item.volume_1day_usd} USD</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#A5D6A7',
        borderRadius: 16,
        padding: 20,
        marginVertical: 12,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6, 
        borderLeftWidth: 6,
        borderLeftColor: '#388E3C',
    },
    title: {
        color: '#2E7D32',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    text: {
        color: '#2E7D32',
        fontSize: 16,
        marginBottom: 4,
    }
});
z