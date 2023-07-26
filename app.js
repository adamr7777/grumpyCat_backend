const express = require('express');
require('dotenv').config();
const cors = require('cors');

const catRouter = require('./routes/catRoute'); 

const app = express();
const port = process.env.PORT || process.env.ALT_PORT;


app.use(cors());
app.use(express.json());
app.use('/api/cat', catRouter);



app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`);
});