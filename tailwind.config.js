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
      fontFamily: {
        poppy: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        "bgimg": "linear-gradient(#ffffff00, #000),url(https://images.unsplash.com/photo-1531419859879-934d18f6c42d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        "bg1": "url('https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNDIzNjA4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
        "bg2": "url('https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b3JwaGFuYWdlJTIwY2hpbGRyZW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')",
        "login-bg": "url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9ycGhhbmFnZSUyMGNoaWxkcmVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60')",
        "about-bg": "url('https://borgenproject.org/wp-content/uploads/15885121712_9e99820c10_z.jpg')",
        "admin-bg": "url('https://www.kindacode.com/wp-content/uploads/2022/05/green.jpeg')"
      }
    },
    // boxShadow: {
    //   '3xl': 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    // },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
