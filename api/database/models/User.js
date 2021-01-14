module.exports = (sequelize,DataTypes) => {
    let alias = "User"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(450),
			allowNull: false,
			field: 'name'
		},
		email: {
			type: DataTypes.STRING(450),
			allowNull: false,
			unique: true,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'password'
		}
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }

	const User = sequelize.define(alias,props,config);

    return User;
}