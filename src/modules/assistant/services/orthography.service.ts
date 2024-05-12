import { Injectable } from '@nestjs/common';
import { OrthographyCheckResponseDto } from '@dtos';
import OpenAI from 'openai';

@Injectable()
export class OrtographyService {
  constructor(private readonly openAI: OpenAI) {}

  public async check(text: string): Promise<OrthographyCheckResponseDto> {
    // ?  Move systems messages to a remote configuration database that can be a DynamoDB table
    const completions = await this.openAI.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `
          Te serán proveídos textos en español con posibles errores ortográficos y gramaticales,
          Las palabras usadas deben de existir en el diccionario de la Real Academia Española,
          Debes de responder en formato JSON usando el ejemplo de salida como referencia,
          tu tarea es corregirlos y retornar las solucion a los errores encontrados sin importar si los errores se repiten, 
          debes retornarlos tantas veces como esten en el texto.
          
          Si no hay errores, debes de retornar un mensaje de felicitaciones.
  
          Ejemplo de salida:
          {
            corrections: string[][], // [['error', 'solución']]
            message: string, //  Usa emojis y texto para felicitar al usuario
          }
          `,
        },
        {
          role: 'user',
          content: text,
        },
      ],
      model: 'gpt-4',
    });

    const response = JSON.parse(completions.choices.at(0).message.content);

    const responseMapped: OrthographyCheckResponseDto = {
      corrections: response.corrections,
      message: response.message,
    };

    return responseMapped;
  }
}
