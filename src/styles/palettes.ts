interface IWhite {
    base: string;
}

interface IBlack {
    base: string;
}

interface IGray {
    base: string;
}

const white: IWhite = {
    base: '#FFFFFF',
};

const black: IBlack = {
    base: '#000000',
};

const gray: IGray = {
    base: '#606578',
};

export interface IColor {
    white: IWhite;
    black: IBlack;
    gray: IGray;
}

export const color = {
    white,
    black,
    gray,
};
