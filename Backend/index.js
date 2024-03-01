import express from "express";

const app = express();

app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to the server');
});

app.listen(3000, () => {
  console.log(`The App is listening to the port 3000`);
});
