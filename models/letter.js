const mongoose = require('mongoose')

const LetterSchema = new mongoose.Schema({

    value:{
       type:Number,
    },
    letter:{
        type:String
    }
    
})

const letter = mongoose.model('letter',LetterSchema)

module.exports = letter
