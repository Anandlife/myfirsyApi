
// const Product = require( "../model/products" );

const Website = require( "../model/webdata" );


const getAllProducts = async ( req, res ) =>
{

    // const { company } = req.query;

    // const queryObject = {};

    // if ( company )
    // {
    //     queryObject = company;
    // }

    const myData = await Website.find( req.query );

    // console.log( req.query );

    res.status( 200 ).json( { myData } );


};

const getAllProductsTesting = async ( req, res ) =>
{

    const myData = await Website.find( req.query );

    console.log( req.query );

    res.status( 200 ).json( { myData } );
}

module.exports = { getAllProducts, getAllProductsTesting };