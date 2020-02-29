import * as path from 'path';
import * as webpack from 'webpack';
import * as MemoryFileSystem from 'memory-fs';

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.properties$/,
          loader: path.resolve(__dirname, '../index.ts')
        }
      ]
    }
  });
  compiler.outputFileSystem = new MemoryFileSystem();

  return new Promise<webpack.Stats>((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err);
      }
      resolve(stats);
    });
  });
};
