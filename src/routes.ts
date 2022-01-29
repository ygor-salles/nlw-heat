import { Router, Request, Response } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessageController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middlware/ensureAuthenticated";

const router = Router();

router.get('/', (request: Request, response: Response) => {
  response.json({ message: 'Welcome api-nlwheat' });
})

router.get('/github', (request: Request, response: Response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

router.get('signin/callback', (request: Request, response: Response) => {
  const { code } = request.query;
  return response.json(code);
});

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)
router.get('/messages/last3', new GetLast3MessageController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { router }