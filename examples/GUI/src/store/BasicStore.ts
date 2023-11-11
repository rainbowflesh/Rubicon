import { MediaQuery } from "./../utils/type/BasicType";
import { defineStore } from "pinia";
import { NetEaseUserInfo } from "@/utils/type/UserInfoDetail";

export const BasicStore = defineStore("basicStore", {
  state: () => {
    return {
      firstOpen: true,
      token: "",
      searchHistory: [] as string[],
      lastSearch: "",
      filterKeys: [
        "DJ",
        "Remix",
        "即兴",
        "变调",
        "Live",
        "伴奏",
        "版,",
        "版)",
        "慢四",
        "纯音乐",
        "二胡",
        "串烧",
        "现场",
      ],
      config: {
        onlyMatchSearchKey: false,
        ignoreNoAlbumSongs: false,
        classificationMusicFile: false,
        disableFilterKey: false,
        concurrency: {
          num: 16,
          downloadFolder: "",
          saveLyric: false,
        },
        platform: "qq",
      },
      MusicMetaPrepare: [
        {
          platform: "mg",
          metas: [] as MediaQuery[],
        },
      ],
      netease: {
        isLogin: false,
        token: "",
        anonimousCookie: "",
        user: {} as NetEaseUserInfo,
      },
    };
  },
  getters: {},
  actions: {
    initEnv() {},
  },
  persist: true,
});
