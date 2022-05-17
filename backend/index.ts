import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { sequelize } from './src/db';
import { authRoute, postRoute } from './src/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use((req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = [`http://${process.env.IP_ADDRESS}:19000`, 'http://localhost:19000'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, authorization');
  next();
});

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// sequelize.sync({ force: true }).then(() => {
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
});

app.get('/', (req: Request, res: Response) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});
//routes
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);
