import { XmlChunk, Message } from 'interfaces';

const MessageFiled = 'Body';
const AuthorField = 'From';

export function xmlFieldParser(fields: XmlChunk): Message {
  if (!fields[AuthorField] || !fields[AuthorField]) {
    throw new Error('Fields must be not empty');
  }
  return {
    author: fields[AuthorField],
    message: fields[MessageFiled],
  };
}
