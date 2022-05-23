module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ss': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'main-right' : '#1F1C2A',
        'main-right-dark' : '#0E0B19',
        'main-right-light' : '#3F3E4C',
        'button-hover' : '#e6bccd',
      },
      height: {
        '125px': '125px',
        '200px': '200px',
        '310px': '310px',
        '337px': '337px',
        '425px': '425px',
        '512px': '512px',
        '548px': '548px',
        '1028px': '1028px',
      },
      width: {
        '125px': '125px',
        '200px': '200px',
        '512px': '512px',
        '584px': '584px',
        '740px': '740px',
        '1000px': '1000px',
      },
    },
  }
}
