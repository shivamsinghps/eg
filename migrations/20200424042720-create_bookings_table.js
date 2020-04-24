'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('bookings', {
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
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE
		});

	},

	down: (queryInterface, Sequelize) => {

		return queryInterface.dropTable('bookings');

	}
};
