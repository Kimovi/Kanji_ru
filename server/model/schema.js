const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KanjiSchema = new Schema(
    {
    kanji: {
        type: String,
    },
    onyomi: {
        type: String,
    },
    kunyomi: {
        type: String,
    },
    //   examples: {
    //     type: ,
    //   }, add example data type later
    }
);

const Kanji = mongoose.model("kanji", KanjiSchema);

module.exports = { Kanji };