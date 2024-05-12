import { Controller, Post } from '@nestjs/common';

@Controller('assistant/orthography')
export class OrtographyAssistantController {
  @Post()
  public async orthography() {
    return 'Hello World!';
  }
}
