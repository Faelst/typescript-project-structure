module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@controllers': './src/controllers',
          '@lib': './src/lib',
          '@modules': './src/modules',
          '@config': './src/config',
          '@interfaces': './src/interfaces',
          '@jobs': './src/jobs',
          '@models': './src/models',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts', '**/*.test.ts'],
};
