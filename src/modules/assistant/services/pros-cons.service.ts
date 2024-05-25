import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ProsConsService {
  constructor(private readonly openAI: OpenAI) {}

  async generateProsAndCons(prompt: string) {
    const completions = await this.openAI.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
            la respuesta debe de ser en formato markdown,
            los pros y contras deben de estar en una lista`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'gpt-4o',
      max_tokens: 500,
    });

    return completions.choices.at(0).message.content;
  }
}
