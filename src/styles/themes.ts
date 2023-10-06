import { ITypography } from './typography';
import { IColor } from './palettes';
import { ITemplate } from './templates';
// @ts-ignore
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export interface ITheme {
    color: IColor;
    typography: ITypography;
    template: ITemplate;
}

export const styled = baseStyled as ThemedStyledInterface<ITheme>;
