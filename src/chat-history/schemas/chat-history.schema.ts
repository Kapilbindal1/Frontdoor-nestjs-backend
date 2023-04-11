import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ChatHistoryDocument = ChatHistory & Document;

@Schema()
export class ChatHistory {
  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  reply: string;

  @Prop({ required: true })
  userId: string;
}

export const ChatHistorySchema = SchemaFactory.createForClass(ChatHistory);
