const express = require('express');
const { default: mongoose } = require('mongoose');
const exphbs = require('express-handlebars');
const ordersRoutes = require('./routes/orders');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(ordersRoutes);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://root:r00t@cluster0.nwswe.mongodb.net/app",
      {
        useNewUrlParser: true
      }
    );

    app.listen(PORT, () => {
      console.log("... server listen port", PORT);
    })
  } catch (error) {
    console.log(error);
  }
}

start();