const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 8000;

//**Link the  person route to the server */
require('./config/mongoose.config')
const personRoutes = require("./routes/person.routes");
personRoutes(app);

app.listen(port, () => console.log('Listening on port: ${port}'));