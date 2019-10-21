const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    postcssPresetEnv({
      browsers: "last 2 versions",
      stage: 2,
    }),
  ],
})
