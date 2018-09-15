import path from 'path';
import webpack from 'webpack';
import MemoryFileSystem from 'memory-fs';

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
          loader: path.resolve(__dirname, '../lib/loader.js')
        }
      ]
    }
  });

  // noinspection JSValidateTypes
  compiler.outputFileSystem = new MemoryFileSystem();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err);
      }

      resolve(stats);
    });
  });
}

