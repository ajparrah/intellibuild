import { Module } from '@nestjs/common';
import { AssistantController } from './assistant.controller';
import { AssistantService } from './assistant.service';
import { OrtographyAssistantController } from './ortography.controller';

@Module({
  controllers: [AssistantController, OrtographyAssistantController],
  providers: [AssistantService],
})
export class AssistantModule {}
