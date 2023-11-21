import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class DeletePostDto {
	@ApiProperty({ example: 1, description: 'Post identificator' })
	@IsNumber()
	@IsNotEmpty()
	declare id: number;
}
