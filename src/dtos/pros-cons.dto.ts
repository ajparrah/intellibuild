import { IsNotEmpty, IsString } from 'class-validator';

export class ProsConsDTO {
  @IsNotEmpty()
  @IsString()
  prompt: string;
}
