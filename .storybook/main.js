const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ]

    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, '../public/assets'),
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: '../public',
          loader: 'default',
        }),
      })
    )

    return config
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook/addon-next',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
