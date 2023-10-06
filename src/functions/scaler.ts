import { Dimensions } from 'react-native';

/**
 * 기준 화면
 * iPhone 5S
 */
const basicDimensions = {
    width: 640,
    height: 1136,
};

const deviceDimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

// Responsive Size
export const scaler = (width: number) => {
    const scale = deviceDimensions.width / basicDimensions.width;
    return Math.round(width * scale);
};

// Responsive Font
export const fontScaler = (fontSize: number) => {
    const scale = Math.sqrt(deviceDimensions.height / basicDimensions.height);
    return Math.round(fontSize * scale);
};
