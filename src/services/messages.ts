import { Service } from 'typedi';
import { Message } from 'interfaces';

@Service()
export class MessageService {
  constructor(private messageModel) {}

  public async saveFromFile(message: Message): Promise<Message> {
    return await this.messageModel.save(message);
  }
}
