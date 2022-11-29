const express = require('express')
const server = express();
const cors = require('cors');
const textRouter = require('./routes/textRoutes');
const connectDB = require('./db/connect');

server.use(cors());
server.use(express.json());


server.use('/message', textRouter);


const start = async() => {
    try {
        await connectDB(process.env.URL);
        server.listen(8000, () => {
            console.log('Listening...')
        })
    }
    catch(err) {
        console.log(err);
    }
}

start();
