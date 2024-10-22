import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Table, Model } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import { UserRole } from './user-role.entity';

interface RoleCreationAttributes {
	tag: string;
	description: string;
}

@Table({ tableName: 'role' })
export class Role extends Model<Role, RoleCreationAttributes> {
	@ApiProperty({ example: 1, description: 'Unique role identificator' })
	@Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
	declare id: number;

	@ApiProperty({ example: 'ADMIN', description: 'Unique role tag' })
	@Column({ type: DataType.STRING(24), unique: true, allowNull: false })
	declare tag: string;

	@ApiProperty({ example: 'Administrator', description: 'Unique role description' })
	@Column({ type: DataType.STRING(32), unique: true, allowNull: false })
	declare description: string;

	@ApiProperty({ example: [], description: 'Which users have this role' })
	@BelongsToMany(() => User, () => UserRole)
	declare users: User[];
}
