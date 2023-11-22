import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, ForeignKey, Table, Model } from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { Role } from './role.model';

@Table({ tableName: 'user_roles' })
export class UserRoles extends Model<UserRoles> {
	@ApiProperty({ example: 1, description: 'Unique relation identificator' })
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	declare id: number;

	@ApiProperty({ example: 1, description: 'Role identificator' })
	@ForeignKey(() => Role)
	@Column({ type: DataType.INTEGER })
	declare roleId: number;

	@ApiProperty({ example: 1, description: 'User identificator' })
	@ForeignKey(() => User)
	@Column({ type: DataType.INTEGER })
	declare userId: number;
}
