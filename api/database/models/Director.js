module.exports = (sequelize,DataTypes) => {
    let alias = "Director"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		firstName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'firstName'
		},
		lastName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'lastName'
		},
		awards: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			field: 'awards'
		}
    }
    let config = {
        tableName: 'director',
        timestamps: false
    }

	const Director = sequelize.define(alias,props,config);
	Director.associate = function(models){
		Director.hasMany(models.Movie,{
			as:'Movies',
			foreignKey:'idDirector'
		});
		Director.hasMany(models.Episode,{
			as:'Episodes',
			foreignKey:'idDirector'
		});

	}
    return Director;
}