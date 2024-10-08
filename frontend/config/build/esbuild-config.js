const ESBuild = require('esbuild')
const path = require('path')
const sassPlugin = require('esbuild-plugin-sass');

const mode = process.env.MODE || 'development';

const isProd = mode === 'production';

module.exports = {
    outdir: path.resolve(__dirname, '..', '..', 'build'),
    entryPoints: [path.resolve(__dirname, '..', '..', 'src', 'index.jsx')],
    entryNames: 'bundle',
    bundle: true,
    minify: isProd,
    sourcemap: !isProd,
    loader: {
        '.png': 'file',
        '.jpg': 'file',
        '.svg': 'file'},
    plugins: [sassPlugin()],
}

// ESBuild.build({
//     outdir: path.resolve(__dirname, '..', '..', 'build'),
//     entryPoints: [path.resolve(__dirname, '..', '..', 'src', 'index.jsx')],
//     entryNames: 'bundle',
//     bundle: true,
//     minify: isProd,
//     sourcemap: true
// })