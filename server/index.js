const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/advice", controller.getAdvice);
app.get("/api/hikingtrail", controller.gethikingTrails);
app.get("/api/timezone/Ameria/Los_Angeles", controller.getWorldTime);

app.listen(4000, () => console.log("Server running on 4000"));



