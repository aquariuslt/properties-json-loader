import * as path from 'path';
import * as webpack from 'webpack';

export default (fixture, options = {}, config: any = {}) => {
  const compiler = webpack({
    context: path.resolve(__dirname),
    entry: path.resolve(__dirname, fixture),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.properties$/,
          loader: path.resolve(__dirname, '../index.ts'),
          options: options || {}
        }
      ]
    },
    plugins: [],
    ...config
  });


  return new Promise<webpack.Stats>((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
      }
      resolve(stats);
    });
  });
};
