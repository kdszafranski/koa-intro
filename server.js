const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const port = 5000;


// middleware
app.use((ctx, next) => {
    console.log('hi');
    next();
});

// routes
router.get('/koala', (ctx, next) => {
  ctx.response.body = 'yo, holla!';
});


// route configuration
app.use(router.routes());
// console.log('routes: ', router.routes());
app.use(router.allowedMethods());

app.listen(port, function() {
  console.log('look at port: ', port);
});
