import { musicController } from "@/controllers/musics-controller";
import { validationSchema } from "@/middlewares/validation-schema-middleware";
import { musicSchema } from "@/schemas/music-schema";
import { Router } from "express";

const musicRouter = Router();

musicRouter.post("/music", validationSchema(musicSchema), musicController.insertMusic);
musicRouter.get("/music", musicController.findMusics);
musicRouter.put("/music", validationSchema(musicSchema), musicController.updateMusic);
musicRouter.delete("/music", musicController.deleteMusic);

export default musicRouter;