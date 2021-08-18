const esbuild = require('esbuild')
const chokidar = require('chokidar')
const liveserver = require('live-server')
const { stylusLoader } = require('esbuild-stylus-loader')

const filesToBuild = [ 'src/main.js' ]
const pathToWatch = 'src/**/*.*'

const compileJS = () => {
  esbuild.build({
    entryPoints: filesToBuild,
    bundle: true,
    minify: false,
    sourcemap: true,
    plugins: [
      stylusLoader()
    ],

    platform: 'node',
    target: [ 'node10.4' ],

    outfile: 'docs/bundle.js'

  }).then(() => {
    console.log('✨ success!')
  }).catch(() => {
    console.log('🚨 error')
  })
}

let watcher = chokidar.watch(pathToWatch,
  {
    persistent: true
  }
)

watcher.on('ready', async () => {
  compileJS();

  watcher.on('add', compileJS)
  watcher.on('change', compileJS)

})

liveserver.start({
  open: false,
  host: '0.0.0.0',
  port: 3000,
  root: 'docs',
  loglevel: 0
})