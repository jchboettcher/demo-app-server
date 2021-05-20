const BaseModel = require('./BaseModel')

class Vaccine extends BaseModel {
  static get tableName() {
    return 'vaccines'
  }

  static get relationMappings() {
    return {}
  }
}

module.exports = Vaccine
