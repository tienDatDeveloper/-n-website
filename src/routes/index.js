const adminRouter = require("./Author/admin");
const cartRouter = require("./cart");
const loginRouter = require("./login");
const clotheRouter = require("./clothe");

function route(app) {
  app.use(cartRouter);
  app.use(loginRouter);
  app.use("/admin", adminRouter);
  app.use("/", clotheRouter);
}
module.exports = route;
