require( "dotenv" ).config();

const connectDB = require( './db/connect' );

const Website = require( './model/webdata' );

const WebJson = require( "./websites.json" );

const start = async () =>
{

    try
    {
        await connectDB( process.env.MONGODB_URL );

        await Website.deleteMany();

        await Website.create( WebJson );

        console.log( "success" );

    } catch ( error )
    {
        console.log( error );
    }
}

start();
