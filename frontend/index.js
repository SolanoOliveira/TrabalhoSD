const express = require("express");
const router = require("./router/router");
const handlebars = require("express-handlebars");
const PORT = 3001;
const app = express();

//app.use("/webfonts", express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`));

app.use(express.urlencoded({extended: false}));

app.use(router);

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars")
app.set("views", `${__dirname}/views`)

app.listen(PORT, () =>{
  console.log(`${PORT}`);
});