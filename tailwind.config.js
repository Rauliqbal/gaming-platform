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
      },
   },
   plugins: [require("daisyui")],
};
