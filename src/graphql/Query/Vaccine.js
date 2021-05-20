const Vaccine = require('../../models/Vaccine')

const allVaccines = async () => {
  try {
    const vaccines = await Vaccine.query()
    return vaccines
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to get vaccines')
  }
}
const resolver = {
  Query: { allVaccines },
}

module.exports = resolver
