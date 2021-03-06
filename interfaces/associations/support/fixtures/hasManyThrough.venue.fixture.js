/**
 * Dependencies
 */

var Offshore = require('offshore');

module.exports = Offshore.Collection.extend({

  tableName: 'venueTable',
  identity: 'venue',
  connection: 'associations',

  attributes: {
    seats: 'integer',
    team: {
      model: 'team',
      columnName: 'team_id'
    },
    stadium: {
      model: 'stadium',
      columnName: 'stadium_id'
    }
  }

});
