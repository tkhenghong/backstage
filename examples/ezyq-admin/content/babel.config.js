module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { esmodules: false, node: 'current' },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-transform-modules-commonjs'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties'],
  ],
}
