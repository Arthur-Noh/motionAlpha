export interface ITypography {
    weight: {
        regular: string;
        medium: string;
        semiBold: string;
        bold: string;
    };
    size: {
        s1: number;
        s2: number;
        s3: number;
        m1: number;
        m2: number;
        m3: number;
        l1: number;
        l2: number;
        l3: number;
    };
}

export const typography: ITypography = {
    weight: {
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
    },
    size: {
        s1: 11,
        s2: 12,
        s3: 13,
        m1: 15,
        m2: 16,
        m3: 17,
        l1: 19,
        l2: 20,
        l3: 21,
    },
};
