import prismaClient from "../prisma";

class GetLast3MessageService {
  async execute() {
    // SELECT * FROM messages m INNER JOIN users u ON m.user_id = u.id ORDERBY created_at DESC LIMIT 3
    const messages = await prismaClient.message.findMany({
      take: 3,
      orderBy: { created_at: 'desc' },
      include: { user: true }
    });

    return messages;
  }
}

export { GetLast3MessageService }