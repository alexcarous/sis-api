module.exports = (sequelize, DataTypes) => {
	const Countries = sequelize.define(
		'Countries',
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING(50),
			},
			code: {
				allowNull: false,
				type: DataTypes.STRING(50),
			},
			deletedAt: DataTypes.DATE,
			createdAt: {
				type: DataTypes.DATE,
				defaultValue: sequelize.literal('NOW()'),
			},
			updatedAt: {
				type: DataTypes.DATE,
				defaultValue: sequelize.literal('NOW()'),
			},
		},
		{
			paranoid: true,
			indexes: [
				{
					unique: false,
					fields: ['name'],
				},
			],
		},
	);
	Countries.associate = (models) => {
		// associations can be defined here
		Countries.hasMany(models.Programs, {
			foreignKey: 'countryId',
		});
		Countries.hasMany(models.Clusters, {
			foreignKey: 'countryId',
		});
		Countries.hasMany(models.Schools, {
			foreignKey: 'countryId',
		});
	};
	return Countries;
};
