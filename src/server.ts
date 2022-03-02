import cors from "cors";
import express from "express";
import configureCloudinary from "./config";
import routes from "./routes";

const server = express();

server.listen(1337, () => {
  console.log("Server started.");

  server.use(express.json({ limit: "50mb" }));
  server.use(express.urlencoded({ limit: "50mb", extended: true }));

  configureCloudinary();

  server.use(cors({ origin: "*", allowedHeaders: "*" }));

  server.use("/image", routes);
});
