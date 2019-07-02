const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

const logger = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const questionsRouter = require("./routes/api/question");
const usersRouter = require("./routes/api/users");
const profileRouter = require("./routes/api/profile");
const careerRouter = require("./routes/api/career");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to db
// console.log(process.env.MongoDbURIOnline);
mongoose
  .connect(process.env.MongoDbURIOnline, {
    useNewUrlParser: true
  })
  .then(console.log("DB connected successfully"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);
app.use("/api/question", questionsRouter);
app.use("/api/users", usersRouter);
app.use("/api/profile", profileRouter);
app.use("/api/career", careerRouter);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json("error");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
