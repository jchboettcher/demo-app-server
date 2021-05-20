const User = require('../../models/User')

const userById = async (obj, { id }, context) => {
  try {
    const user = await User.query().findOne('id', id)
    return user
  } catch (error) {
    throw new Error('failed to get user from id')
  }
}

const resolver = {
  Query: {
    userById,
  },
}

module.exports = resolver
