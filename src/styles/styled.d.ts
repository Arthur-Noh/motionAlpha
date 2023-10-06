import 'styled-components';
import { ITemplate } from './templates';
import { ITypography } from './typography';
import { IColor } from './palettes';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: IColor;
        typography: ITypography;
        template: ITemplate;
    }
}
