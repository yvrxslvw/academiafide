import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UserService {
	constructor(private readonly usersService: UsersService) {}

	async update(id: number, dto: UpdateUserDto, image?: any) {
		const hashPassword = dto.password ? await bcrypt.hash(dto.password, 5) : undefined;
		dto.password = hashPassword;
		return this.usersService.update(id, dto, image);
	}
}
