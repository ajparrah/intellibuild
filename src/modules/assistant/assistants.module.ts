import { Module } from '@nestjs/common';
import { AssistantsController } from './assistants.controller';
import { AssistantsService } from './assistants.service';
import { OrtographyAssistantController } from './orthography.controller';

@Module({
  controllers: [AssistantsController, OrtographyAssistantController],
  providers: [AssistantsService],
})
export class AssistantsModule {}
