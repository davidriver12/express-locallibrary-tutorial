const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true
  }
});

// Virtual for bookinstance's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this.name}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);