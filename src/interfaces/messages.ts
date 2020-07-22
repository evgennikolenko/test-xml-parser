export interface Message {
  _id?: string;
  author: string;
  message: string | object;
}

export interface XmlChunk {
  From: string;
  Body: string | object;
}
