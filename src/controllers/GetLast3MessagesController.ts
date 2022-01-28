import { Request, Response } from "express";
import { GetLast3MessageService } from '../services/GetLast3MessageService';

class GetLast3MessageController {
  async handle(request: Request, response: Response) {
    const service = new GetLast3MessageService();

    try {
      const result = await service.execute()
      return response.json(result)
    } catch (error) {
      return response.json(error.message || 'Failure server')
    }

  }
}

export { GetLast3MessageController }