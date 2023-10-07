import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootScreenDefinition } from './routeDefinitions';
import { theme } from '../styles/themes';

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
                        options={{
                            headerStyle: {
                                backgroundColor: theme.color.white.base,
                            },
                            headerTitleAlign: 'center',
                            headerTintColor: theme.color.black.base,
                        }}
                    />
                )
            )}
        </Stack.Navigator>
    );
};

export default RootStacks;
