module.exports = (sequelize,DataTypes) => {
    let alias = "Season"
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
			allowNull: true,
			field: 'number'
		},
		releaseDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'releaseDate'
		},
		idSerie: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'series',
				key: 'id'
			},
			field: 'idSerie'
		}
    }
    let config = {
        tableName: 'seasons',
        timestamps: false
    }

	const Season = sequelize.define(alias,props,config);
	Season.associate = function(models){
		Season.belongsTo(models.Serie,{
			as:'Serie',
			foreignKey:'idSerie'
		});
		Season.hasMany(models.Episode,{
			as:'Episodes',
			foreignKey:'idSeason'
		});
	}
    return Season;
}