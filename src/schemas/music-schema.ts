import joi from "joi";
import { CreateMusic } from "@/protocols/musics-protocol";

export const musicSchema = joi.object<CreateMusic>({
  title: joi.string().required().max(50),
  artist: joi.string().required().max(50),
  album: joi.string().required().max(50),
  duration: joi.number().required().min(1).max(3600)
});