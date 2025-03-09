export const theme = {
  colors: {
    white: '#fff',
    black: '#191414',

    //neutral
    neutral: (opacity: number) => `rgba(10,10,10,${opacity})`,

    grayBg: '#e5e8eb',
    green:'#1DB954'
  },
  fontWeight: {
    medium: 500 as const,
    semiBold: 600 as const,
    bold: 700 as const,
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl:25,
  },
};