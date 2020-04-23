import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import ActionButton from 'react-native-action-button';

// import { Container } from './styles';

export default function Dashboard({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                backgroundColor: '#fff',
            }}
        >
            <Text style={{ fontSize: 22, marginBottom: 15 }}>
                Goals and Wishes
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: '#d3d3d3',
                        padding: 20,
                        margin: 5,
                        borderRadius: 16,
                    }}
                >
                    <Text style={{ fontSize: 16 }}>All</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#d3d3d3',
                        padding: 20,
                        margin: 5,
                        borderRadius: 16,
                    }}
                >
                    <Text style={{ fontSize: 16 }}>New</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#d3d3d3',
                        padding: 20,
                        margin: 5,
                        borderRadius: 16,
                    }}
                >
                    <Text style={{ fontSize: 16 }}>Reached</Text>
                </TouchableOpacity>
            </View>

            <ActionButton
                buttonColor="#63a79c"
                onPress={() => navigation.navigate('Create')}
            />
        </View>
    );
}
