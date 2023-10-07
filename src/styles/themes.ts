import { ITypography, typography } from './typography';
import { IColor, color } from './palettes';
import { ITemplate, template } from './templates';

export const theme: ITheme = {
    color: color,
    typography: typography,
    template: template,
};

export interface ITheme {
    color: IColor;
    typography: ITypography;
    template: ITemplate;
}
