import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import autoprefixer from 'autoprefixer';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = require('./package.json');

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      external(),
      postcss({
        plugins: [autoprefixer()],
        minimize: true,
        modules: true
      }),
      babel({
        exclude: 'node_modules/**',
        presets: [["@babel/preset-react", { runtime: "automatic" }]]
      }),
      terser()
    ]
    
  }
]
