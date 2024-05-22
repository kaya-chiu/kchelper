import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/kchelper.min.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'default'
    },
    plugins: [
      terser(),
      commonjs()
    ],
  },
]