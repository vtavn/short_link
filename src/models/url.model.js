import mongoose from 'mongoose'

let Schema = mongoose.Schema

let UrlSchema = new Schema({
  originUrl: { type: String, require: true },
  shortUrl: { type: String, require: true },
  passwords: { type: String, default: null },
  totalView: { type: Number, default: 0 },
  createdAt: { type: Number, default: Date.now },
  lastViewAt: { type: Number, default: null },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null }
})


module.exports = mongoose.model('Url', UrlSchema)
