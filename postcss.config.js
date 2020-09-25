module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-flexbugs-fixes"),
    require("postcss-import"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
      browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
    }),
  ],
}
