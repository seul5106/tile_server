import express, { Express, Request, Response } from 'express';

const app: Express = express();

const port = 5000;

app.get('/test', (req: Request, res: Response) => {
  res.send('Typescript + Node.js + Express Server');
});

const auth = require('./controller/router');
app.use('/auth', auth);

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
