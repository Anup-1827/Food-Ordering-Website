const express = require('express');
const app = express();
const port = 1999;
const cors = require('cors');


const router = require('./Route/index')

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json())  //Parse the json data
app.use('/v1', router);

// CORS
app.use( 
    (req,res,next)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "Control-Type, Authorization");
        next();
    }
)


app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
})
