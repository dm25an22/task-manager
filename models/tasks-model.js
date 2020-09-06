const { Schema, model} = require("mongoose");

const schema = new Schema({
  description: {type: String, required: true},
  due_date: {type: Schema.Types.Mixed, default: null},
  repeating_days: {type: Object, required: true},
  color: {type: String, required: true},
  is_favourite: {type: Boolean, required: true},
  is_archive: {type: Boolean, required: true}
}, {
  versionKey: false
})

module.exports = model(`tasks`, schema);