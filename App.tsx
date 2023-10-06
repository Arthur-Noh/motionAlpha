import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootScreen from './src/roots/rootScreen';

const App = () => {
    return (
        <NavigationContainer>
            <RootScreen />
        </NavigationContainer>
    );
};

export default App;
