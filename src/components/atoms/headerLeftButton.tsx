import React, { useCallback } from 'react';
import { IHeaderButton } from './headerRightButton';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { scaler } from '../../functions/scaler';
import BackArrow from '../../assets/commons/backArrow.png';
import { theme } from '../../styles/themes';
import CustomText from './customText';

const HeaderButton = styled.TouchableOpacity`
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

interface IHeaderLeftButton {
    button: IHeaderButton;
}

const HeaderLeftButton = (props: IHeaderLeftButton) => {
    const { button } = props;
    const navigation = useNavigation();

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
                return <ButtonImage source={BackArrow} />;
        }
    }, []);

    return (
        <HeaderButton onPress={button.onPress ?? navigation.goBack}>
            {getButton(button)}
        </HeaderButton>
    );
};

export default HeaderLeftButton;
