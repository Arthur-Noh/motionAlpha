module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        // 인라인 스타일 허용
        'react-native/no-inline-styles': 0,
        // 미사용 변수 에러 끄기
        'no-unused-var': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
    },
};
