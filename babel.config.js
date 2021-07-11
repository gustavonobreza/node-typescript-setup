module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@': './src'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts',
    'src/__tests__'
  ]
}
