const app = require("./app");
const dotenv = require("dotenv");
const connect = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });



// Handling Uncaught Exception Error
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down due to Uncaught Exception ");
  process.exit(1);
});




// Server runnig 
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is starting on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});





// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
