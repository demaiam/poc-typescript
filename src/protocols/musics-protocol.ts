export type Music = {
  id: number,
  title: string,
  artist: string,
  album: string,
  duration: number
}

export type CreateMusic = Omit<Music, "id">;