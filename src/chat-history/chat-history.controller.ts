import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { ChatHistoryService } from "./chat-history.service";
import { CreateChatHistoryDto } from "./dto/chat-history.dto";

@Controller("history")
export class ChatHistoryController {
  constructor(private readonly ChatHistoryService: ChatHistoryService) {}

  //creating entry of the response with userId and text msg
  @Post()
  create(@Body() CreateChatHistoryDto: CreateChatHistoryDto) {
    return this.ChatHistoryService.create(CreateChatHistoryDto);
  }

  //fetching the histories data on the basis of userId
  @Get("userId/:id")
  findByUserId(@Param("id") id: string) {
    return this.ChatHistoryService.findByUserId(id);
  }

  @Get()
  findAll() {
    return this.ChatHistoryService.findAll();
  }

  //fetching the histories data on the basis of id
  @Get(":id")
  findById(@Param("id") id: string) {
    return this.ChatHistoryService.findById(id);
  }
}
