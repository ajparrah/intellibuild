import { Body, Controller, Post } from '@nestjs/common';
import { ProsConsService } from './services';
import { ProsConsDTO } from '@dtos';

@Controller('assistants/pros-cons')
export class ProsConsController {
  constructor(private readonly prosConsService: ProsConsService) {}

  @Post()
  async generateProsAndCons(@Body() prosConsDTO: ProsConsDTO) {
    return await this.prosConsService.generateProsAndCons(prosConsDTO.prompt);
  }
}
