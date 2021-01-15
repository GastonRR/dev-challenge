module.exports = (sequelize,DataTypes) => {
    let alias = "Episode"
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
		number: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			field: 'number'
		},
		releaseDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'releaseDate'
		},
		idSeason: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'seasons',
				key: 'id'
			},
			field: 'idSeason'
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
        tableName: 'episodes',
        timestamps: false
    }

	const Episode = sequelize.define(alias,props,config);
	Episode.associate = function(models){
		Episode.belongsTo(models.Season,{
			as:'Season',
			foreignKey:'idSeason'
		});
		Episode.belongsTo(models.Director,{
			as:'Director',
			foreignKey:'idDirector'
		});
		Episode.belongsToMany(models.Actor,{
			as: 'Actors',
			through: 'actorEpisode',
			foreignKey: 'idEpisode',
			otherKey:'idActor',
			timestamps: false
		});
	}


    return Episode;
}