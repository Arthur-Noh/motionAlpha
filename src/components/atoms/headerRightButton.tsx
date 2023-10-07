import React, { useCallback } from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../styles/themes';
import { scaler } from '../../functions/scaler';
import CustomText from './customText';

const Layout = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HeaderButton = styled.TouchableOpacity<{ needGap: boolean }>`
    margin-left: ${({ needGap }) =>
        needGap ? theme.template.templatePadding : 0}px;
    padding: ${scaler(4)}px;
`;

const ButtonText = styled(CustomText)<{ disable?: boolean }>`
    color: ${({ disable }) =>
        disable ? theme.color.gray.base : theme.color.black.base};
`;

// eslint-disable-next-line prettier/prettier
const ButtonImage = styled.Image<{ customWidth?: number, customHeight?: number }>`
    width: ${({ customWidth }) => customWidth ?? scaler(32)}px;
    height: ${({ customHeight }) => customHeight ?? scaler(32)}px;
`;

interface HeaderCustomImageSizeType {
    width: number;
    height: number;
}

export type HeaderButtonType = 'text' | 'image';

export interface IHeaderButton {
    type: HeaderButtonType;
    text?: string;
    imageSource?: ImageSourcePropType;
    customImageSize?: HeaderCustomImageSizeType;
    onPress: () => void;
    disable?: boolean;
}

interface IHeaderRightButton {
    buttons?: Array<IHeaderButton>;
}

const HeaderRightButton = (props: IHeaderRightButton) => {
    const { buttons } = props;

    const getButton = useCallback((button: IHeaderButton) => {
        switch (button.type) {
            case 'text':
                return (
                    <ButtonText disable={button.disable}>
                        {button.text}
                    </ButtonText>
                );
            case 'image':
                return (
                    <ButtonImage
                        source={button.imageSource!}
                        customWidth={button.customImageSize?.width}
                        customHeight={button.customImageSize?.height}
                    />
                );
            default:
                return (
                    <ButtonText disable={button.disable}>
                        {button.text}
                    </ButtonText>
                );
        }
    }, []);

    return (
        <Layout>
            {props.buttons?.map((button, index) => (
                <HeaderButton
                    key={index}
                    needGap={index !== 0}
                    onPress={button.onPress}
                >
                    {getButton(button)}
                </HeaderButton>
            ))}
        </Layout>
    );
};

export default HeaderRightButton;
