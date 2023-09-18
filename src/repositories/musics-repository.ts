import { connection } from "../configs/database-connection";
import { CreateMusic, Music } from "../protocols/musics-protocol";

async function insertMusic(music: CreateMusic) {
  await connection.query<Music>(`
    INSERT INTO musics (title, artist, album, duration) VALUES ($1, $2, $3, $4);`,
    [music.title, music.artist, music.album, music.duration]
  );
}

async function findMusics() {
  const result = await connection.query<Music[]>(`
    SELECT * FROM musics;`
  );
  return result.rows;
}

async function findMusicByTitleAndArtist(title: string, artist: string) {
  const result = await connection.query<Music>(`
    SELECT * FROM musics WHERE title=$1 AND artist=$2;`,
    [title, artist]
  );
  return result.rowCount;
}

async function updateMusic(music: Music, column: string, value: string) {
  await connection.query<Music>(`
    UPDATE musics SET ${column}=$1 WHERE title=$2 AND artist=$3;`,
    [value, music.title, music.artist]
  );
}

async function deleteMusic(title: string, artist: string) {
  await connection.query(`
    DELETE FROM musics WHERE title=$1 AND artist=$2;`,
    [title, artist]
  );
}

export const musicRepository = {
  insertMusic,
  findMusics,
  findMusicByTitleAndArtist,
  updateMusic,
  deleteMusic
}