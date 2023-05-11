const mongoose = require( "mongoose" );

const validator = require( "validator" );

// Build connection with database

mongoose.connect( "mongodb://localhost:27017/anandtechnical",

    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } ).then( () =>
    {
        console.log( "Connection Successfull ...." )
    } ).catch( ( err ) =>
    {
        console.log( "Connection rejected ..." )
    } );


// Schema
// A mongoose schema defines the structure of ducuments
// default values, validators, etc....

const playlistSchema = new mongoose.Schema( {

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate ( value )
        {
            if ( !validator.isEmail( value ) )
            {
                throw new Error( "Email is invalid" );
            }
        }
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
} )


// Models - used to create collections

/*

-> A mongoose model is a wrapper on the Mongoose Schema
-> Mongoose model provides an inrerface to the database for creating, querying,
updating, deleting records etc.

*/

//  creating a collection 

const Playlist = new mongoose.model( "Playlist", playlistSchema );

// Inserting single documents

const createDocument = async () =>
{

    try
    {
        const reactPlaylist = new Playlist( {
            name: "ReactJS",
            email: "anand@gmail.com",
            ctype: "Front End",
            videos: 50,
            author: "Anand Yadav",
            active: true
        } )
        const result = await reactPlaylist.save();
        console.log( result );
    } catch ( err )
    {
        console.log( err );
    }
}

createDocument();



// Inserting multiple documents in collections



// const createDocument = async () =>
// {

//     try
//     {
//         const reactPlaylist = new Playlist( {
//             name: "ReactJS",
//             ctype: "Front End",
//             videos: 50,
//             author: "Anand Yadav",
//             active: true
//         } )

//         const jsPlaylist = new Playlist( {
//             name: "JavaScript",
//             ctype: "Full Stack",
//             videos: 51,
//             author: "Anand Yadav",
//             active: true
//         } )

//         const mongoosePlaylist = new Playlist( {
//             name: "Mongodb mongoose",
//             ctype: "Back End",
//             videos: 25,
//             author: "Anand Yadav",
//             active: true
//         } )


//         const nodePlaylist = new Playlist( {
//             name: "NodeJS",
//             ctype: "Back End",
//             videos: 30,
//             author: "Anand Yadav",
//             active: true
//         } )

//         const result = await Playlist.insertMany( [ reactPlaylist, jsPlaylist, mongoosePlaylist, nodePlaylist ] );
//         console.log( result );
//     } catch ( err )
//     {
//         console.log( err );
//     }
// }

// createDocument();

// Read the documents

const getDocument = async () =>
{

    const result = await Playlist.find();

    console.log( result );


}

// getDocument();

// Update the documents


const updateDocument = async ( _id ) =>
{

    try
    {

        const result = await Playlist.updateOne( { _id }, {
            $set: {
                name: "ExpressJS"
            }
        } );

        console.log( result );

    } catch ( err )
    {
        console.log( err );
    }
}

// updateDocument( "6455bf091b78967866f8f924" );

// Delete the document


const deleteDocument = async ( _id ) =>
{
    try
    {
        const result = await Playlist.deleteOne( { _id } );

        console.log( result );

    } catch ( err )
    {
        console.log( err );
    }

}

// deleteDocument( "6455bf091b78967866f8f924" );







