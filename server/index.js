//REQIRED--------------------------------------------------------------------------------
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();

app.use(express.json());

// DECONSTRUCTIONS-----------------------------------------------------------------------
const { SERVER_PORT, SERVER_CONECTION } = process.env;
const {
  getHouses,
  addHouses,
  deleteHouses,
} = require("./controllers/controller");

//MASSIVE--------------------------------------------------------------------------------

massive({
  connectionString: SERVER_CONECTION,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("We have landed at the database 🛰️");
    app.listen(SERVER_PORT, () =>
      console.log(`The server is running on ${SERVER_PORT}✅`)
    );
  })
  .catch((err) => {
    console.log(
      `The problem with troubleshooting is that trouble shoots back. ❌ ${err}`
    );
  });

//ENDPOINTS----------------------------------------------------------------------------

app.get("/api/houses", getHouses);
app.post("/api/houses", addHouses);
app.delete("/api/houses/:id", deleteHouses);
