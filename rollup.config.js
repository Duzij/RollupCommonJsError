import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve'

export default {
    input: 'index.js',
    output: {
        dir: 'output',
        format: 'cjs'
    },
    plugins: [resolve(), commonjs()]
};