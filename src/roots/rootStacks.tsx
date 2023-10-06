import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreenDefinition } from './routeDefinitions';

const Stack = createNativeStackNavigator();

const RootStacks = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            {Object.entries({ ...RootScreenDefinition }).map(
                ([name, { initialParams, component }]) => (
                    <Stack.Screen
                        key={name}
                        name={name}
                        component={component}
                        initialParams={initialParams}
                    />
                )
            )}
        </Stack.Navigator>
    );
};

export default RootStacks;
