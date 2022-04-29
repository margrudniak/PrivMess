import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { db } from './src/db';
import { createAuthRoutes } from './src/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

(async () => {
  await db.sequelize.sync({ force: true });
})();

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

//routes
createAuthRoutes(app);
