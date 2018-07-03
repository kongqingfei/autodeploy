const Koa = require('koa')
const server = require('koa-static')
const childProcess = require('child_process')
const path = require('path')

const app = new Koa()
app.use(async (ctx, next) => {
  if (ctx.path.endsWith('html')) {
    return next()
  }
  const query = ctx.query || {}
  const {name, version} = query
  if (!name || !version) {
    return ctx.body = 'name and version is required'
  }
  try {
    const ret = childProcess.execFileSync(`/data/voyager/git/${name}/rr.sh`, [version], {})
    ctx.body = `部署结束\n\n\n${ret.toString()}`
  } catch (e) {
    ctx.body = `部署异常\n\n\n${e.stack}`
  }
})
app.use(server(path.resolve(__dirname, global.process.env.NODE_ENV === 'development' ? '../client/' : '.')))
app.listen(8000)
