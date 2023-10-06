import React from 'react';
import { SafeAreaView } from 'react-native';
import RootStacks from './rootStacks';

const RootScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <RootStacks />
        </SafeAreaView>
    );
};

export default RootScreen;
