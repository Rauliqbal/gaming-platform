module.exports = {
   content: ["./index.html"],
   theme: {
      container: {
         center: true,
      },
      colors: {
         orange: {
            300: "#FA9021",
            400: "#E87D0E",
         },
      },
      extend: {
         fontFamily: {
            poppins: ["poppins", "sans-serif"],
         },
         backgroundImage: {
            "about-img": "linear-gradient(to right bottom, rgba(0,0,0, 0.65), rgba(0,0,0, 0.55)),url('/src/image/bg-image.png')",
         },
      },
   },
   plugins: [require("daisyui")],
};
