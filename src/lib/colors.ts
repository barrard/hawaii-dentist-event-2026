export const colors = {
    primary: '#b3932b', // Gold
    secondary: '#00533c', // Deep green
    accent: '#552d00', // Warm brown
    mutedForeground: '#4f7a37', // Olive green
    foreground: '#552d00', // Warm brown

    // Additional suggestions
    highlight: '#e5c75e', // Soft golden highlight
    tertiary: '#8b5a2b', // Medium warm brown
    deepAccent: '#2e2a1f', // Charcoal brown
    lightBackground: '#f6f2e3', // Creamy off-white
    coolContrast: '#267a5a', // Teal-green for balance
    warmHighlight: '#d97a36' // Burnt orange accent
};

export default colors;

export type Colors = typeof colors;

export type ColorName = keyof Colors;

export type ColorValue = Colors[ColorName];
