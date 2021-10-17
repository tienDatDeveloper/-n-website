const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const { dirname } = require("path");
const methodOverride = require('method-override');
const app = express();
const port = 4202;
const route = require("./routes");
const db = require("./config/db");

db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine("handlebars",
     handlebars({ extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        } 
    }));
app.set("view engine", "handlebars");

app.set("views", path.join(__dirname, "resources", "views"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride('_method'));
app.use(express.urlencoded());
route(app);

app.listen(port, () =>
  console.log(`app listening at http://localhost: ${port}`)
);
