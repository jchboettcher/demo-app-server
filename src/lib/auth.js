const { AuthenticationError } = require('apollo-server-express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')

const createToken = payload => jwt.sign(payload, config.tokenSecret)

const decodeToken = token => {
  if (!token) {
    throw new AuthenticationError('Invalid token, please log in.')
  }
  try {
    return jwt.verify(token, config.tokenSecret)
  } catch (error) {
    throw new AuthenticationError('Invalid token, please log in.')
  }
}

const hashPassword = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      reject(err)
    } else {
      resolve(hash)
    }
  })
})

const comparePassword = (password, hashedPassword) => new Promise((resolve, reject) => {
  bcrypt.compare(password, hashedPassword, (err, matches) => {
    if (err) {
      reject(err)
    } else {
      resolve(matches)
    }
  })
})

module.exports = {
  hashPassword, comparePassword, createToken, decodeToken,
}
