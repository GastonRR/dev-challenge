module.exports = (sequelize,DataTypes) => {
    let alias = "Movie"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		title: {
			type: DataTypes.STRING(450),
			allowNull: false,
			field: 'title'
		},
		awards: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'awards'
		},
		length: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			field: 'length'
		},
		releaseDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'releaseDate'
		},
		idGenre: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'genre',
				key: 'id'
			},
			field: 'idGenre'
		},
		idDirector: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'director',
				key: 'id'
			},
			field: 'idDirector'
		}
    }
    let config = {
        tableName: 'movies',
        timestamps: false
    }

	const Movie = sequelize.define(alias,props,config);

	Movie.associate = function(models){
		Movie.belongsTo(models.Genre,{
			as:'Genre',
			foreignKey:'idGenre'
		});
		Movie.belongsTo(models.Director,{
			as:'Director',
			foreignKey:'idDirector'
		});
		Movie.belongsToMany(models.Actor,{
			as: 'Actors',
			through: 'actorMovies',
			foreignKey: 'idMovies',
			otherKey:'idActor',
			timestamps: false
		});
	}

    return Movie;
}