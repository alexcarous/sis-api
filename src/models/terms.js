module.exports = (sequelize, DataTypes) => {
	const Terms = sequelize.define(
		'Terms',
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING(25),
			},
			academicYear: {
				type: DataTypes.INTEGER,
				allowNull: false,
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
	Terms.associate = (models) => {
		// associations can be defined here
		Terms.hasMany(models.Courses, {
			foreignKey: 'termId',
		});
		Terms.hasMany(models.Attendances, {
			foreignKey: 'termId',
		});
		Terms.hasMany(models.StudentRecords, {
			foreignKey: 'termId',
		});
	};
	return Terms;
};
