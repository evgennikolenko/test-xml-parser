import { Message } from 'interfaces';
import mongoose from 'mongoose';

const MessageModel = new mongoose.Schema(
  {
    author: {
      type: String,
      index: true,
    },
    message: {
      type: String,
      index: true,
    },
  },
  { timestamps: true },
);

export const MessageModels = mongoose.model<Message & mongoose.Document>(
  'Message',
  MessageModel,
);
