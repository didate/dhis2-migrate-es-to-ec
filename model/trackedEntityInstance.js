const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const TeiSchema = new mongoose.Schema({
    tei: { type: String, required: true },
    date: { type: Date, default: Date.now }
})


TeiSchema.plugin(aggregatePaginate);
module.exports = Tei = mongoose.model('trackedEntityInstance', TeiSchema);