const mongoose = require('mongoose');
const schema = mongoose.Schema;

const subscribeschema = new schema({
    email : { type : String,
        required : true,
        unique : true
    }     
},{
    timestamps : true
})

const form =mongoose.model('subscriber_email',subscribeschema,'subscribers_lists');

module.exports = form;