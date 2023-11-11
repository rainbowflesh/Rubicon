from downloader.src.Api.QQMusic import QQMusicApi
from downloader.App import app

QQApi = QQMusicApi()


@app.get("/qq/search/<searchKey>/<page>/<size>")
def search(searchKey: str, page=1, size=30):
    # 检查前缀
    prefix = searchKey.split(":")
    if len(prefix) == 2:
        command = prefix[0]
        _id = prefix[1]
        # 高级指令
        if command == 'p':
            # 加载歌单
            lst = QQApi.parseQQMusicPlaylist(_id)
        elif command == 'b':
            # 加载Album
            lst = QQApi.parseQQMusicAlbum(_id)
        elif command == 'id':
            # 指定单曲id
            lst = QQApi.getSingleMusicInfo(_id)
        elif command == 't':
            # 加载排行版
            lst = QQApi.parseQQMusicToplist(_id)
        else:
            lst = []
    else:
        size = int(size)
        if size > 30:  # 这里强制让qq音乐指定为30一页 因为qq服务器现在禁止超过30一页拉取数据
            size = 30
        lst = QQApi.getQQMusicSearch(searchKey, int(page), int(size))
    page = lst['page']
    lst = QQApi.formatList(lst['data'])
    return {
        'code': 200,
        'list': lst,
        'page': page
    }


def init():
    pass
