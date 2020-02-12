// Todo: create Album Schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number
});

const Album = mongoose.model("artist", AlbumSchema);

module.exports = Album;