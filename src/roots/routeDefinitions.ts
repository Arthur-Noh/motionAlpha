import HomeScreen from '../pages/homeScreen';
import SettingScreen from '../pages/settingScreen';

const HomeScreens = {
    HomeScreen: {
        initialParams: {},
        component: HomeScreen,
    },
};

const SettingScreens = {
    SettingScreen: {
        initialParams: {},
        component: SettingScreen,
    },
};

export interface RootScreenParamLists {
    HomeScreen: undefined;
    SettingScreen: undefined;
}

export const RootScreenDefinition = {
    ...HomeScreens,
    ...SettingScreens,
};
