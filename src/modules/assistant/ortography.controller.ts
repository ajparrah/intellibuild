import { Controller, Post } from '@nestjs/common';

@Controller('assistant/ortography')
export class OrtographyAssistantController {
  @Post()
  public async ortography() {
    return 'Hello World!';
  }
}
