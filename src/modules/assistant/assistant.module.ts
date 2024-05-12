import { Module } from '@nestjs/common';
import { AssistantController } from './assistant.controller';
import { AssistantService } from './assistant.service';
import { OrtographyAssistantController } from './orthography.controller';

@Module({
  controllers: [AssistantController, OrtographyAssistantController],
  providers: [AssistantService],
})
export class AssistantModule {}
