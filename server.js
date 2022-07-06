const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World')
})

require("./app/routes/users.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Start server at port 3000.')
})