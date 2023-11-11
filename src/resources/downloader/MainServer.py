#  Copyright (c) 2023. 秋城落叶  All Rights Reserved
#  @Author         : 秋城落叶 QiuChenly
#  @Contact         : qiuchenly@outlook.com

import argparse

parser = argparse.ArgumentParser(description="QQFlacMusicDownloader.")
parser.add_argument("--port", default=8899, type=int)
args = parser.parse_args()

from downloader.App import Start
from downloader.API.es import init as es
from downloader.API.kw import init as kw
from downloader.API.qq import init as qq
from downloader.API.files import init as files

es()
qq()
kw()
files()

Start(args.port)
