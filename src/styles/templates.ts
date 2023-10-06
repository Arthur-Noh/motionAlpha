import { scaler } from '../functions/scaler';

export interface ITemplate {
    templatePadding: number;
    // Component template
    smallPadding: number;
    mediumPadding: number;
    largePadding: number;
    smallRadius: number;
    mediumRadius: number;
    largerRadius: number;
}

export const template: ITemplate = {
    templatePadding: scaler(16),
    smallPadding: scaler(12),
    mediumPadding: scaler(16),
    largePadding: scaler(20),
    smallRadius: scaler(6),
    mediumRadius: scaler(8),
    largerRadius: scaler(10),
};
