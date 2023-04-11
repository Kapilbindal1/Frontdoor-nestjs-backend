import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CreateChatHistoryDto } from "./dto/chat-history.dto";
import { ChatHistory, ChatHistoryDocument } from "./schemas/chat-history.schema";

@Injectable()
export class ChatHistoryService {
  constructor(
    @InjectModel(ChatHistory.name)
    private historyModel: Model<ChatHistoryDocument>
  ) {}

  async create(createUserDto: CreateChatHistoryDto): Promise<ChatHistoryDocument> {
    const createdHistory = new this.historyModel(createUserDto);
    return createdHistory.save();
  }

  async findByUserId(userId: string): Promise<ChatHistoryDocument[]> {
    return this.historyModel.find({ userId }).exec();
  }

  async findAll(): Promise<ChatHistoryDocument[]> {
    return this.historyModel.find().exec();
  }

  async findById(id: string): Promise<ChatHistoryDocument> {
    return this.historyModel.findById(id);
  }
}
