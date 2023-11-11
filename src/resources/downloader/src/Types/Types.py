class Songs(object):
    def __init__(self,
                 album: str,
                 artist: str,
                 musicrid: str,
                 releaseDate: str,
                 albumid: int,
                 songTimeMinutes: str,
                 pic120: str,
                 albumpic: str,
                 name: str,
                 rid: int,
                 *args,
                 **kwargs) -> None:
        """

        Args:
            album: 专辑
            artist: 艺术家，歌手
            musicrid: 音乐id
            releaseDate: 发布时间
            albumid: AlbumID
            songTimeMinutes: 歌曲时间
            pic120: 音乐图片
            albumpic: Album图片
            name: 歌曲名称
            rid: 歌曲实际数字id
            *args:
            **kwargs:
        """
        self.rid = rid
        self.name = name
        self.pic120 = pic120
        self.songTimeMinutes = songTimeMinutes
        self.albumid = albumid
        self.albumpic = albumpic
        self.releaseDate = releaseDate
        self.album = album
        self.artist = artist
        self.musicrid = musicrid

    # @property
    # def title(self):
    #     return self._album
