import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Create from './pages/Create';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}
export default App;
