const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    postcssPresetEnv({
      browsers: "last 2 versions",
      stage: 3,
    }),
  ],
})
