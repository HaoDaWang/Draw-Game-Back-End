import * as express from 'express'
import * as path from 'path'
import * as favicon from 'serve-favicon'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import { IncomingMessage, ServerResponse } from 'http';
import { Response, Request, NextFunction, ErrorRequestHandler, Router, Express } from 'express-serve-static-core';
import * as routerManager from './routes/routerManager';

var app:Express = express();

/**
 * 设置视图模板
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//加载中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置CORS
app.all("*",(req:Request,res:Response,next:NextFunction) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//加载路由
app.use('/', routerManager as Router);

//捕获404
app.use((req:Request, res:Response, next:NextFunction) => {
  res.redirect('/');
});

//捕获服务器异常
app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message);
  res.status(err.status || 500);
  res.render('error');
});

export = app;
