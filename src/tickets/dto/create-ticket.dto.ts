import { ArrayNotEmpty, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  title: string;
  @ArrayNotEmpty()
  category: number[];
  @IsString()
  description: string;
  @IsEmail()
  email: string
}
