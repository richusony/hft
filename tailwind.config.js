const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bgimg": "linear-gradient(#ffffff00, #000),url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60')",
        "bg1": "url('https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNDIzNjA4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
        "bg2": "url('https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3JwaGFuYWdlJTIwY2hpbGRyZW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
        "login-bg":"url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9ycGhhbmFnZSUyMGNoaWxkcmVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60')",
        "about-bg":"url('https://borgenproject.org/wp-content/uploads/15885121712_9e99820c10_z.jpg')"
      }
    },
  },
  plugins: [],
}
