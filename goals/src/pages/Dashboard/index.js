import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Dashboard({ navigation }) {
    return (
        <View>
            <Text>Dashboard</Text>
            <Button
                title="clique para a pagina de Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}
