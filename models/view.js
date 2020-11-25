const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");
const Schema = mongoose.Schema;

const viewsSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    autopopulate: true,
  },
  date: {
    type: Number,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    autopopulate: true,
  },
});

module.exports =
  mongoose.model.View ||
  mongoose.model("View", viewsSchema.plugin(autopopulate));
