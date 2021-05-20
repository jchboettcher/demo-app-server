const casual = require('casual')

casual.define('vaccine', () => {
  const word = casual.word
  const name = `${word[0].toUpperCase()}${word.substring(1).toLowerCase()} disease`
  return {
    id: casual.uuid,
    name,
    state: casual.state,
    createdAt: casual.moment,
    updatedAt: casual.moment,
  }
})


const vaccineData = []

for (let i = 0; i < 100; ++i) {
  vaccineData.push(casual.vaccine)
}

module.exports = vaccineData
