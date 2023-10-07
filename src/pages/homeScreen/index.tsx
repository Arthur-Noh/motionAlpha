import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import useCustomHeader from '../../hooks/useCustomHeader';
import CustomText from '../../components/atoms/customText';
import { theme } from '../../styles/themes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootScreenParamLists } from '../../roots/routeDefinitions';

const HomeScreen = () => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootScreenParamLists, 'SettingScreen'>
        >();

    useCustomHeader({
        title: '커스텀 헤더',
        headerLeftButton: {
            type: 'text',
            text: '뒤로가기',
            onPress: () => {
                console.log('뒤로가자');
            },
        },
    });

    return (
        <View>
            <Text>홈 페이지 111</Text>
            <CustomText>123123</CustomText>

            <Pressable onPress={() => navigation.navigate('SettingScreen')}>
                <View
                    style={{
                        padding: 25,
                        backgroundColor: theme.color.black.base,
                    }}
                >
                    <CustomText style={{ color: theme.color.white.base }}>
                        눌러요
                    </CustomText>
                </View>
            </Pressable>
        </View>
    );
};

export default HomeScreen;
