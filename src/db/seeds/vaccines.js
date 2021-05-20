const vaccineData = require('../../../data/vaccine')


exports.seed = knex => knex('vaccines').del()
  .then(() => knex('vaccines').insert(vaccineData))
