import 'dotenv/config';
import express, { Request, Response } from 'express';

import { router } from './routes';

const app = express();

app.use(router);

app.get('/github', (request: Request, response: Response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get('signin/callback', (request: Request, response: Response) => {
  const { code } = request.query;
  return response.json(code);
});

app.listen(process.env.PORT || 4000, () => console.log(`Server is running on PORT ${process.env.PORT || 4000}`));

