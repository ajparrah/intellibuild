import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class OrthographyCheckDTO {
  @MinLength(10)
  @IsNotEmpty()
  @IsString()
  text: string;
}
