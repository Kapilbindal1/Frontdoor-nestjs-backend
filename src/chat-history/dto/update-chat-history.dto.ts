import { PartialType } from "@nestjs/mapped-types";
import { CreateChatHistoryDto } from "./chat-history.dto";

export class UpdateChatHistoryDto extends PartialType(CreateChatHistoryDto) {}
