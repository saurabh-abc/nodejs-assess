const app = require('express')();
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
const cors = require('cors');
require('./db/dbConnect');
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./routes/fileRoute'));
app.use('/', require('./routes/userRoute'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is run in ${PORT}`)
})
