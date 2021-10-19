module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'light-text': 'var(--color-light-text)',
        body: 'var(--color-body)',
        'light-bg': 'var(--color-light-bg)',
        white: 'var(--color-white)',
        error: 'var(--color-error)',
      },
      fontSize: {
        tiny: ['0.6875rem', '1.0181rem'],
        small: ['0.8125rem', '1.5625rem'],
        body: ['0.9375rem', '1.3887rem'],
        'heading-2': ['1.375rem', '2.0362rem'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
