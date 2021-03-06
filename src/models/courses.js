module.exports = (sequelize, DataTypes) => {
	const Courses = sequelize.define(
		'Courses',
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING(50),
			},
			gradeId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Grades',
					key: 'id',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			termId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'Terms',
					key: 'id',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			recordId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'StudentRecords',
					key: 'id',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			deletedAt: DataTypes.DATE,
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: sequelize.literal('NOW()'),
			},
			updatedAt: DataTypes.DATE,
		},
		{
			paranoid: true,
		},
	);
	Courses.associate = (models) => {
		// associations can be defined here
		Courses.belongsTo(models.Terms, {
			foreignKey: 'termId',
		});
		Courses.belongsTo(models.StudentRecords, {
			foreignKey: 'recordId',
		});
		Courses.belongsTo(models.Grades, {
			foreignKey: 'Grades',
			targetKey: 'id',
		});
	};
	return Courses;
};
