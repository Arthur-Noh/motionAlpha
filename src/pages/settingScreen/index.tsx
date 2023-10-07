import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styles/themes';
import useCustomHeader from '../../hooks/useCustomHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootScreenParamLists } from '../../roots/routeDefinitions';

const SettingScreen = () => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootScreenParamLists, 'SettingScreen'>
        >();

    useCustomHeader({
        title: '셋팅 헤더',
        headerLeftButton: {
            type: 'text',
            text: '뒤로가기',
            onPress: () => navigation.goBack(),
        },
    });

    return (
        <View>
            <Text>SettingScreen</Text>
        </View>
    );
};

export default SettingScreen;
