import { Music } from "@/protocols/musics-protocol";
import { musicService } from "@/services/musics-services";
import { Request, Response } from "express";
import httpStatus from 'http-status';

export async function insertMusic(req: Request, res: Response) {
  const music = req.body as Music;

  await musicService.insertMusic(music);

  res.sendStatus(httpStatus.OK);
}

export async function findMusics(req: Request, res: Response) {
  const musics = await musicService.findMusics();

  res.status(httpStatus.OK).send(musics);
}

export async function updateMusic(req: Request, res: Response) {
  const music = req.body as Music;
  const column = req.query.column as string;
  const value = req.query.value as string;

  await musicService.updateMusic(music, column, value);

  res.sendStatus(httpStatus.OK);
}

export async function deleteMusic(req: Request, res: Response) {
  const title = req.query.title as string;
  const artist = req.query.artist as string;

  await musicService.deleteMusic(title, artist);

  res.sendStatus(httpStatus.OK);
}

export const musicController = {
  insertMusic,
  findMusics,
  updateMusic,
  deleteMusic
}