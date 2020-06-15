const mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
             description: {
                  type: String,
                  
             },
             category:{
                 type: String
             },
             date:{
                 type:String,
                 default:'NoDeadline'
             },
             done:{
                 type:String,
                 default:'unchecked'
                 
             }
},{
    timestamps:true
})

module.exports = mongoose.model('Tasks',taskSchema);