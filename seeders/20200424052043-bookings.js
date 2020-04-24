'use strict';
// const _data = require('../data')

module.exports = {
	up: (queryInterface, Sequelize) => {

		return queryInterface.bulkInsert('bookings', [{
					booking_code: "47682-167",
					booking_status: "Killian",
					location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)')
			},
			{
				booking_code: "62584-265",
				booking_status: "Saunderson",
				location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)')
			}, {
				booking_code: "53329-824",
				booking_status: "Gavra",
				location: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)')
			}] );

	},

	down: (queryInterface, Sequelize) => {

		return queryInterface.bulkDelete('People', null, {});

	}
};
