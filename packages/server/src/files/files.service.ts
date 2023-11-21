import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as uuid from 'uuid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FilesService {
	async createFile(file: any) {
		try {
			const fileName = uuid.v4() + '.jpg';
			const filePath = path.resolve(__dirname, 'static');
			if (!fs.existsSync(filePath)) fs.mkdirSync(filePath, { recursive: true });
			fs.writeFileSync(path.join(filePath, fileName), file.buffer);
			return fileName;
		} catch (error) {
			console.error(error);
			throw new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async deleteFile(fileName: string) {
		try {
			const filePath = path.resolve(__dirname, 'static', fileName);
			if (!filePath) throw new Error("File doesn't exists");
			fs.rmSync(filePath);
		} catch (error) {
			console.error(error);
			throw new HttpException('An unexpected error occurred...', HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
