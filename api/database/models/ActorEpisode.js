module.exports = (sequelize,DataTypes) => {
    let alias = "ActorEpisode"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		idEpisode: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'episodes',
				key: 'id'
			},
			field: 'idEpisode'
		},
		idActor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'actor',
				key: 'id'
			},
			field: 'idActor'
		}
    }
    let config = {
        tableName: 'actorepisode',
        timestamps: false
    }

	const ActorEpisode = sequelize.define(alias,props,config);

    return ActorEpisode;
}