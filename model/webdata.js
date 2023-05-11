const mongoose = require( "mongoose" );

const webSchema = new mongoose.Schema( {

    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

} );

module.exports = mongoose.model( 'Website', webSchema );
