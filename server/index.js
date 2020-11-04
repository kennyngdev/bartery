require("dotenv").config();
const app = require("./express_setup");
const { seed } = require("./db_connect");
const db = require("./db_connect");
const port= process.env.PORT || 6969;
const config = require("../knexfile.js");
(async () => {
  try {
    console.log("Running migrations...");
    await db.migrate.latest();
    console.log("seeding database");
    await db.seed.run()
    console.log("Starting express...");
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
