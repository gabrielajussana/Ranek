module.exports = {
  presets: [
    '@vue/app'
  ],
  "presets": [
    ["@babel/preset-env", { "modules": false }],
    "@babel/preset-typescript"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
