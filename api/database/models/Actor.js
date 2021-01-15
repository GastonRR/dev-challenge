module.exports = (sequelize,DataTypes) => {
    let alias = "Actor"
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
        tableName: 'actor',
        timestamps: false
    }

	const Actor = sequelize.define(alias,props,config);
	Actor.associate = function(models){
	
		Actor.belongsToMany(models.Movie,{
			as: 'Movies',
			through: 'actorMovies',
			foreignKey: 'idActor',
			otherKey:'idMovie',
			timestamps: false
		});
		Actor.belongsToMany(models.Episode,{
			as: 'Episodes',
			through: 'actorEpisode',
			foreignKey: 'idActor',
			otherKey:'idEpisode',
			timestamps: false
		});
	}

    return Actor;
}