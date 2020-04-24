const db = require('../database/connection'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

module.exports = sequelize.define("booking", {
	booking_id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	booking_code: {
		type: Sequelize.STRING,
		allowNull: true
	},
	booking_status: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.GEOMETRY('POINT'),
		allowNull: false
	}
})
