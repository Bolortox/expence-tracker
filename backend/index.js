import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cors from "cors;";

dotenv.config();

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

const users = [
  { name: "bolor", age: 19 },
  { name: "togos", age: 22 },
];

app.get("/", (request, response) => {
  response.send("GET huselt irlee");
});

app.post("/users", (request, response) => {
  const newUsers = { name: request.body.name, age: request.body.age };
  users.push(newUsers);
  console.log(users);
  response.send("POST huselt irlee");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
