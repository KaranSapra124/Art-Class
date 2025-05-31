const { Schema, model } = require("mongoose")

const artWorkshop = new Schema({
    sectionType: {
        type: String
    },
    imageUrl: {
        type: String,
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
})

module.exports = model("artWorkshop", artWorkshop)