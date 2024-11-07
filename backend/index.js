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


app.get("/", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {

const {age , name} = request.body
const number = Math.random() * 100;
const result = Math.floor(number);

  try {
    if (!name || !age) {
      return response.send("NAME or AGE is not here");
    } else {
      if (typeof name !== "string") {
        return response.send("NAME is not a string");
      }
      if (typeof age !== "number") {
        return response.send("AGE is not a number");
      }
      const newUsers = {
        id: result,
        name: name,
        age: age,
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
