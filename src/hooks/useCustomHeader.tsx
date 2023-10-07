import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderRightButton, {
    IHeaderButton,
} from '../components/atoms/headerRightButton';
import { useLayoutEffect } from 'react';
import HeaderLeftButton from '../components/atoms/headerLeftButton';

interface IUseCustomHeader {
    title?: string;
    hide?: boolean;
    headerLeftButton?: IHeaderButton;
    headerRightButtons?: Array<IHeaderButton>;
}

// type: HeaderButtonType;
//     text?: string;
//     imageSource?: ImageSourcePropType;
//     customImageSize?: HeaderCustomImageSizeType;
//     onPress: () => void;
//     disable?: boolean;

const useCustomHeader = (props: IUseCustomHeader) => {
    const {
        title = '',
        hide = false,
        headerLeftButton = {
            type: undefined,
            text: undefined,
            imageSource: undefined,
            onPress: () => {},
            disable: false,
        },
        headerRightButtons = [],
    } = props;

    const navigation = useNavigation();

    useLayoutEffect(() => {
        let options: Partial<{}> = {
            headerTitle: title,
            headerShown: !hide,
            headerBackTitle: '',
            headerRight: () => (
                <HeaderRightButton buttons={headerRightButtons} />
            ),
        };

        if (headerLeftButton.type) {
            options = {
                ...options,
                headerLeft: () => (
                    <HeaderLeftButton
                        button={{
                            type: headerLeftButton.type,
                            text: headerLeftButton.text,
                            imageSource: headerLeftButton.imageSource,
                            disable: headerLeftButton.disable,
                            onPress: headerLeftButton.onPress,
                        }}
                    />
                ),
            };
        }

        navigation.setOptions(options);

        return () => {
            navigation.setOptions({
                headerRightButtons: () => <HeaderRightButton buttons={[]} />,
            });
        };
    }, [navigation, title, hide, headerLeftButton, headerRightButtons]);
};

export default useCustomHeader;
