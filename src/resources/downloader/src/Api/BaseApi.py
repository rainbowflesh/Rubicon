import abc

from downloader.src.Types.Types import Songs


class BaseApi(abc.ABC):
    @abc.abstractmethod
    def search(self, searchKey: str) -> list[Songs]:
        """
        搜索歌曲并获取统一列表
        Args:
            searchKey: 搜索字符串

        Returns:
            返回 `SearchResult` 类型的列表数据
        """
