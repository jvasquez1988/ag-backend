import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schemas/schema";
import { connect } from "./BD/database";

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
connect();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
      messageId: "test",
    },
  })
);

app.listen(3000, () => console.log("Run on port 3000"));
