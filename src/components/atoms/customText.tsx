import styled from 'styled-components/native';
import { theme } from '../../styles/themes';

const CustomText = styled.Text`
    font-size: ${theme.typography.size.m1}px;
    font-weight: ${theme.typography.weight.regular};
    color: ${theme.color.black.base};
`;

export default CustomText;
