const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testapp1');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
});
module.exports = mongoose.model('User', userSchema);
