import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

const users = [
  { id: 1, name: "bolor", age: 19 },
  { id: 2, name: "togos", age: 22 },
];

const number = Math.random() * 100;
const result = Math.floor(number);

app.get("/", (request, response) => {
  response.send("GET huselt irlee");
});

app.post("/users", (request, response) => {
  try {
    if (!request.body.name || !request.body.age) {
      return response.send("NAME or AGE is not here");
    } else {
      if (typeof request.body.name !== "string") {
        return response.send("NAME is not a string");
      }
      if (typeof request.body.age !== "number") {
        return response.send("AGE is not a number");
      }
      const newUsers = {
        id: request.body.id,
        name: request.body.name,
        age: request.body.age,
      };
      users.push(newUsers);
      console.log(users);
      response.json(users);
    }
  } catch (error) {
    throw new Error(error);
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
