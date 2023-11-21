import { Injectable, CanActivate, HttpException, HttpStatus, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(private readonly jwtService: JwtService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		try {
			const request = context.switchToHttp().getRequest<Request>();
			const token = this.extractTokenFromHeader(request);
			if (!token) throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
			const payload = await this.jwtService.verifyAsync(token);
			request['user'] = payload;
		} catch (error) {
			throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
		}
		return true;
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const [type, token] = request.headers.authorization?.split(' ') ?? [];
		return type === 'Bearer' ? token : undefined;
	}
}
