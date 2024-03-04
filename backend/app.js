const experss = require("express");
const authRoutes = require("./routes/authRoutes");

const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config({ path: "backend/config/config.env" });

const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/errorMiddleware");

const app = experss();
app.use(experss.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors("origin", "*"));

// Routes
app.use("/api/v1/auth",authRoutes);


// Middle wares
app.use(errorMiddleware);

module.exports = app;
