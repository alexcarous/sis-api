module.exports = (sequelize, DataTypes) => {
	const Exams = sequelize.define(
		'Exams',
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
			recordId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'StudentRecords',
					key: 'id',
				},
			},
			maxGrade: {
				type: DataTypes.DECIMAL(5, 2),
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
	Exams.associate = (models) => {
		Exams.belongsTo(models.StudentRecords, {
			foreignKey: 'recordId',
		});
		Exams.belongsTo(models.Grades, {
			foreignKey: 'gradeId',
		});
	};
	return Exams;
};
