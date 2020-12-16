// const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const fs = require('fs');
// const WriteJsonPlugin = require('write-json-webpack-plugin');
// const GitRevisionPlugin = require('git-revision-webpack-plugin');
// const helpers = require('./helpers');
const {ContextReplacementPlugin} = require('webpack');

const pkg = JSON.parse(fs.readFileSync('./package.json'));

// const gitRevisionPlugin = new GitRevisionPlugin({
//   branch: true
// });

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$|\.sass$/,
        exclude: [/node_modules/, /v1/],
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'src/styles/includes.scss'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new SVGSpritemapPlugin(helpers.root('src/assets/icons/**/*.svg'),
    //   {
    //     output: {
    //       filename: 'assets/svg/oss-icons-def.svg',
    //       chunk: {
    //         keep: true
    //       }
    //     },
    //     sprite: {
    //       prefix: 'icon-'
    //     }
    //   }),
    new ContextReplacementPlugin(/moment[\/\\]locale$/, /en|es|fr/),
    // new WriteJsonPlugin({
    //   object: {
    //     name: pkg.name,
    //     version: pkg.version,
    //     timestamp: new Date().toString(),
    //     build: gitRevisionPlugin.commithash().substr(0, 7),
    //     branch: gitRevisionPlugin.branch(),
    //     // env: environment TODO: check if this is required
    //   },
    //   path: './',
    //   filename: 'manifest.json',
    //   pretty: true // makes file human-readable (default false)
    // })
  ]
};
