import { Module } from '@nestjs/common';
import { AssistantsController } from './assistants.controller';
import { AssistantsService } from './services/assistants.service';
import { OrtographyAssistantController } from './orthography.controller';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { OrtographyService, ProsConsService } from './services';
import { ProsConsController } from './pros-cons.controller';

@Module({
  controllers: [
    AssistantsController,
    OrtographyAssistantController,
    ProsConsController,
  ],
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
    OrtographyService,
    ProsConsService,
  ],
})
export class AssistantsModule {}
