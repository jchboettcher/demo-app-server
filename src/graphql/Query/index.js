const merge = require('lodash.merge')
const User = require('./User')
const Vaccine = require('./Vaccine')

const resolvers = [User, Vaccine]

module.exports = merge(...resolvers)
