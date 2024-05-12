import { Body, Controller, Post } from '@nestjs/common';
import { OrtographyService } from './services';
import { OrthographyCheckDTO } from '@dtos/orthography-check.dto';

@Controller('assistants/orthography')
export class OrtographyAssistantController {
  constructor(private readonly orthographyService: OrtographyService) {}

  @Post('check')
  public async orthography(@Body() orthographyCheckDTO: OrthographyCheckDTO) {
    return await this.orthographyService.check(orthographyCheckDTO.text);
  }
}
