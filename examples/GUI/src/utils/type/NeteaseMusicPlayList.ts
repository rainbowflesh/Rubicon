export interface MusicPlaylist {
  code: number;
  list: MusicPlayList2List[];
}

export interface MusicPlayList2List {
  coverImgUrl: string;
  id: number;
  name: string;
  trackCount: number;
  userId: number;
}
