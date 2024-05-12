import { Module } from '@nestjs/common';
import { AssistantsController } from './assistants.controller';
import { AssistantsService } from './assistants.service';
import { OrtographyAssistantController } from './orthography.controller';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AssistantsController, OrtographyAssistantController],
  providers: [
    AssistantsService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) => {
        const apiKey = configService.get<string>('openai.apiKey');
        return new OpenAI({
          apiKey,
        });
      },
      inject: [ConfigService],
    },
  ],
})
export class AssistantsModule {}
