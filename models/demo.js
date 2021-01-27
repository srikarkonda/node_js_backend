const mongoose= require('mongoose');

const demoSchema = mongoose.Schema({
  title: { type: 'String', required: true},
  content: { type: 'String', required: true},
});

module.exports = mongoose.model('Demo',demoSchema);


