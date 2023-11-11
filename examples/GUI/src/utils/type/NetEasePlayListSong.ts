export interface NeteasePlayListSongs {
  code: number;
  list: NeteasePlayListSongsList[];
}

export interface NeteasePlayListSongsList {
  album: string;
  author: Author[];
  author_simple: string;
  mid: number;
  title: string;
  publishTime: number;

  fee: number;
  cloud: boolean;

  copyright: number;

  privileges: Privileges;
}

export interface Privileges {
  chargeInfoList: ChargeInfoList[];
  cp: number;
  cs: boolean;
  dl: number;
  dlLevel: string;
  downloadMaxBrLevel: string;
  downloadMaxbr: number;
  fee: number;
  fl: number;
  flLevel: string;
  flag: number;
  freeTrialPrivilege: FreeTrialPrivilege;
  id: number;
  maxBrLevel: string;
  maxbr: number;
  payed: number;
  pl: number;
  plLevel: string;
  playMaxBrLevel: string;
  playMaxbr: number;
  preSell: boolean;
  rscl: any;
  sp: number;
  st: number;
  subp: number;
  toast: boolean;
}

export interface ChargeInfoList {
  chargeMessage: any;
  chargeType: number;
  chargeUrl: any;
  rate: number;
}

export interface FreeTrialPrivilege {
  listenType: any;
  resConsumable: boolean;
  userConsumable: boolean;
}

export interface Author {
  alias: any[];
  id: number;
  name: string;
  tns: any[];
}
