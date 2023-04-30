import express from "express";
import { serverAppSettings } from "./serverConstants";

const app = express();
app.use(express.static("public"));

app.listen(serverAppSettings.serverPort, () => {
  console.log(`Server listening on port ${serverAppSettings.serverPort}`);
});
