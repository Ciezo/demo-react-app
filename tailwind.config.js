module.exports = {
  content: [
  './src/**/*.{js,jsx,ts,tsx}',                         /* point tailwind to all src files */
  'node_modules/flowbite-react/lib/esm/**/*.js',        /* include flowbite-react ui lib */
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite-react'),
  ],
};