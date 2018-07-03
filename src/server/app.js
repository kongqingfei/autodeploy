const Koa = require('koa')
const childProcess = require('child_process')

const app = new Koa()
app.use(async ctx => {
  const query = ctx.query || {}
  const {name, version} = query
  if (!name || !version) {
    return ctx.body = 'name and version is required'
  }
  childProcess.execFile(`/data/voyager/git/${name}/rr.sh`, [version], null, (error, stdout, stderr) => {
    if (error) {
      ctx.body = `部署失败\n\n\n${error.stack}\n\n\n${stderr}`
    } else {
      ctx.body = `部署成功\n\n\n${stdout}`
    }
  })
})
app.listen(8000)