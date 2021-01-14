module.exports = (sequelize,DataTypes) => {
    let alias = "ActorMovie"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		idActor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'actor',
				key: 'id'
			},
			field: 'idActor'
		},
		idMovies: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'movies',
				key: 'id'
			},
			field: 'idMovies'
		}
    }
    let config = {
        tableName: 'actormovies',
        timestamps: false
    }

	const ActorMovie = sequelize.define(alias,props,config);

    return ActorMovie;
}