const  express = require("express");
const cors = require('cors');
const  app = express();

app.use(cors());

require("./db/conn");
const router = require('./router/router');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var path = require("path");

console.log(path.join(__dirname, "../public"));

app.use(express.static(path.join(__dirname, "../public"))); 

require("dotenv").config();

const  port = process.env.PORT || 8080;

app.use('/', router);

app.listen(port, () => {
console.log(`Server running at ` + port);
});