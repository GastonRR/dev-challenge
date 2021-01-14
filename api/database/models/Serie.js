module.exports = (sequelize,DataTypes) => {
    let alias = "Serie"
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
		releaseDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
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
		}
    }
    let config = {
        tableName: 'series',
        timestamps: false
    }

	const Serie = sequelize.define(alias,props,config);
	Serie.associate = function(models){
		Serie.belongsTo(models.Genre,{
			as:'Genre',
			foreignKey:'idGenre'
		})
		Serie.hasMany(models.Season,{
			as:'Seasons',
			foreignKey:'idSerie'
		});
	}



    return Serie;
}