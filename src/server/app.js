const Koa = require('koa')
const childProcess = require('child_process')

const app = new Koa()
app.use(async ctx => {
  const query = ctx.query || {}
  const {name, version} = query
  if (!name || !version) {
    return ctx.body = 'name and version is required'
  }
  const ret = childProcess.execFileSync(`/data/voyager/git/${name}/rr.sh`, [version], {})
  ctx.body = `部署结束\n\n\n${ret.toString()}`
})
app.listen(8000)