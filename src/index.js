import mongoose from 'mongoose';
// import { DB_NAME } from './constants.js';
import connectDB from './db/index.js'
import dotenv from 'dotenv'

dotenv.config({path:'./.env'})

connectDB()

/*
import express from 'express';

const app = express()

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI/DB_NAME}`)

        app.on('ERROR', (err) => {
            console.log('app is not able to talk with database', err);
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
    }
    catch(err){
        // console.log("Mongo DB not connected ",err);
        console.error("ERROR :",err)
        throw err
    }
})()
*/