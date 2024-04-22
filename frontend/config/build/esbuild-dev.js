const ESBuild = require('esbuild')
const path = require('path')
const config = require('./esbuild-config.js')

const PORT = Number(process.env.PORT) || 3000;

let ctx = ESBuild.context({
    ...config
}).then(ctx => {
    ctx.watch({

    })
    ctx.serve({
        servedir: config.outdir,
        port: PORT
    }).then(()=> {
        console.log('server started on http://localhost:' + PORT)
    }).catch(err => console.log(err))
})

// const runWatchAndServer = async () => {
//     const ctx = await ESBuild.context(config)
//
//     await ctx.watch()
//
//     const { host, port } = await ctx.serve({
//         servedir: config.outdir ,
//         port: PORT,
//     })
//
//     return new Promise<{host: string, port: number}>((res, rej) => {
//         res({host, port})
//     })
// }
//
// runWatchAndServer()
//     .then(({host, port}) => console.log(`Server started on http://localhost:${PORT}`) ) // console.log(`Server started on PORT=${port}; HOST=${host}`)
//     .catch(console.error)


