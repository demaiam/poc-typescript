import { Music } from "@/protocols/musics-protocol";
import { musicRepository } from "@/repositories/musics-repository";
import { notFoundError } from "@/errors/not-found-error";
import { conflictError } from "@/errors/conflict-error";

async function insertMusic(music: Music) {
  const searchMusic = musicRepository.findMusicByTitleAndArtist(music.title, music.artist);
  if (!searchMusic) throw conflictError("Music already exists!");

  return musicRepository.insertMusic(music);
}

async function findMusics() {
  return await musicRepository.findMusics();
}

async function updateMusic(music: Music, column: string, value: string) {
  const searchMusic = await musicRepository.findMusicByTitleAndArtist(music.title, music.artist);
  if (!searchMusic) throw notFoundError();

  return await musicRepository.updateMusic(music, column, value);
}

async function deleteMusic(title: string, artist: string) {
  const searchMusic = await musicRepository.findMusicByTitleAndArtist(title, artist);
  if (!searchMusic) throw notFoundError();

  return await musicRepository.deleteMusic(title, artist);
}

export const musicService = {
  insertMusic,
  findMusics,
  updateMusic,
  deleteMusic
}