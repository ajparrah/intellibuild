import { Controller, Post } from '@nestjs/common';

import OpenAI from 'openai';

@Controller('assistants/orthography')
export class OrtographyAssistantController {
  constructor(private readonly openAI: OpenAI) {}

  @Post()
  public async orthography() {
    // TODO: Move to own service and add an abtraction layer to build other assistants
    const completion = await this.openAI.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Eres un asistente para corregir ortografia muy util',
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    if (completion.choices.length >= 1) {
      return completion.choices.at(0);
    }

    return 'There is not valid choices. Try it again.';
  }
}
