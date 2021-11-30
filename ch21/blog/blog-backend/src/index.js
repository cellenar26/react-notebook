const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
    console.log(ctx.url)
    console.log(1)
    if (ctx.query.authorized !== '1') {
        ctx.status = 401 // unauth
        return;
    }

    await next()
    console.log('END') // 아래의 미들웨어가 끝나야 end가 출력됨

})

app.use((ctx, next) => {
    console.log(2)
    next()
})

app.use(ctx => {
    ctx.body = 'hello world'
})

app.listen(4000, () => {
    console.log('listen port 4000')
})