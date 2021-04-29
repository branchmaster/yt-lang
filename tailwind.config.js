module.exports = {
  purge: ['src/**/*.js'],
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
        '2/5': '40%',
        '1/7': '15%',
        full: '100%',
      },
      colors: {
        primary: {
          default: '#1a2057',
          50: '#f7f8fa',
          100: '#cccddd',
          200: '#ececec',
          300: '#4c6179',
          400: '#314a66',
          500: '#1a2057',
          600: '#171d4e',
          700: '#141841',
          800: '#101334',
          900: '#0d102b',
        },
        secondary: {
          50: '#fff9f5',
          100: '#fef2ea',
          200: '#fddfcb',
          300: '#fcccab',
          400: '#f78b42',
          500: '#f77f2d',
          600: '#de7229',
          700: '#b95f22',
          800: '#944c1b',
          900: '#793e16',
        },
      },
      fontFamily: {
        custom: ['Nunito'],
      },
      borderRadius: {
        st: '1.1rem',
        mp: '0.9rem',
        xl: '2rem',
      },
      spacing: {
        26: '7rem',
        90: '22.5rem',
        100: '24rem',
        108: '27.5rem',
        128: '32rem',
      },
      width: {
        28: '7.5rem',
        34: '8.5rem',
      },
      maxWidth: {
        '1/3': '30%',
        '2/5': '40%',
      },
      margin: {
        60: '15rem',
        70: '19rem',
      },
      padding: {
        33: '0.65rem',
      },
      boxShadow: {
        st: '0 -4px 10px 0 rgba(0, 0, 0, 0.15)',
        cd: '0 5px 20px 0 rgba(0, 0, 0, 0.1)',
        fd: '0 0px 25px 0 rgba(0, 0, 0, 0.04)',
        bt: '0 4px 10px 0 rgba(0, 0, 0, 0.15)',
      },
    },
    variants: {},
    plugins: [],
    purge: false,
  },
};
