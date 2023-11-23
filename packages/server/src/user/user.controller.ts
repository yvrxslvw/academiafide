import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiTags('User interactions')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}
}
