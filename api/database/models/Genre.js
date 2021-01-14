module.exports = (sequelize,DataTypes) => {
    let alias = "Genre"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'name'
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'active'
		}
    }
    let config = {
        tableName: 'genre',
        timestamps: false
    }

	const Genre = sequelize.define(alias,props,config);
	Genre.associate = function(models){
		Genre.hasMany(models.Movie,{
			as:'Movies',
			foreignKey:'idGenre'
		});
		Genre.hasMany(models.Serie,{
			as:'Series',
			foreignKey:'idGenre'
		});

	}

    return Genre;
}