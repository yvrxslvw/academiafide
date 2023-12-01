import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, ForeignKey, Table, Model } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import { Role } from './role.entity';

@Table({ tableName: 'user_role' })
export class UserRole extends Model<UserRole> {
	@ApiProperty({ example: 1, description: 'Unique relation identificator' })
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	declare id: number;

	@ApiProperty({ example: 1, description: 'User identificator' })
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	declare userId: number;

	@ApiProperty({ example: 1, description: 'Role identificator' })
	@ForeignKey(() => Role)
	@Column({ type: DataType.INTEGER })
	declare roleId: number;
}
